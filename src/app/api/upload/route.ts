// app/api/submit-booking/route.ts

import { supabaseServer } from "@/utils/supabaseServer"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // Important pour les uploads de fichiers

export async function POST(request: Request) {
  const supabase = supabaseServer

  try {
    const formData = await request.formData()

    // Extraire et valider les données
    const name = formData.get('name')?.toString() || ''
    const email = formData.get('email')?.toString() || ''
    const appointmentDate = formData.get('appointmentDate')?.toString() || ''
    const additionalMessage = formData.get('additionalMessage')?.toString() || ''
    const paymentProof = formData.get('paymentProof') as File | null
    const packageTitle = formData.get('packageTitle')?.toString() || ''
    const packageDuration = formData.get('packageDuration')?.toString() || ''
    const packagePrice = formData.get('packagePrice')?.toString() || ''

    // Validation étendue
    if (!name || !email || !appointmentDate || !paymentProof || 
        !packageTitle || !packageDuration || !packagePrice) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Vérification de la Moreau du fichier (max 5MB)
    if (paymentProof.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Le fichier est trop volumineux (max 5MB)' },
        { status: 400 }
      )
    }

    // Upload du fichier
    const fileExt = paymentProof.name.split('.').pop()?.toLowerCase()

    if (!fileExt) {
      return NextResponse.json(
        { error: 'Type de fichier non autorisé (seuls JPG, PNG, PDF sont acceptés)' },
        { status: 400 }
      )
    }

    const fileName = `${Date.now()}_${paymentProof.name}`
    const filePath = fileName

    const { error: uploadError } = await supabase.storage
      .from('bookings')
      .upload(fileName, paymentProof)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json(
        { error: uploadError.message },
        { status: 500 }
      )
    }

    // Récupération de l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from('bookings')
      .getPublicUrl(filePath)

    // Enregistrement dans la base de données
    const { data, error: dbError } = await supabase
      .from('customers')
      .insert({
        name: name,
        email: email,
        meetDate: appointmentDate,
        ticketProof: publicUrl,
        message: additionalMessage,
        optionName: packageTitle,
        optionDuration: packageDuration,
        optionPrice: packagePrice,
        status: 'pending'
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      // Tentative de suppression du fichier uploadé en cas d'échec
      await supabase.storage.from('bookings').remove([filePath])
      
      return NextResponse.json(
        { error: dbError.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, booking: data },
      { status: 200 }
    )

  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}