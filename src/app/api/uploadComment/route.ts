// app/api/uploadComment/route.ts
import { supabaseClient } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, commentaire, note } = body;

    if (!nom || !commentaire) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 },
      );
    }

    // 1. Insertion avec statut 'displayed' par défaut
    const { data: insertedData, error: dbError } = await supabaseClient
      .from("comments_brunella")
      .insert([
        {
          nom,
          email,
          commentaire,
          note: note || 5,
          status: "pending",
        },
      ])
      .select("id")
      .single();

    if (dbError) throw new Error(`Erreur Supabase: ${dbError.message}`);

    // 2. Notification Telegram avec lien vers le Backoffice Admin
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (telegramToken && chatId && insertedData) {
      const text = `🔔 *Nouveau commentaire en ligne !*\n\n👤 *Nom:* ${nom}\n📧 *Email:* ${email || "Non renseigné"}\n💬 *Message:* ${commentaire}\n\nStatut: � En attente`;

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "🔑 Ouvrir la modération",
                  url: `${siteUrl}/admin/data/comments`,
                },
              ],
            ],
          },
        }),
      }).catch((err) => console.error("Erreur Telegram:", err));
    }

    return NextResponse.json({ message: "Succès" }, { status: 201 });
  } catch (err) {
    console.error("Erreur API uploadComment:", err);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}