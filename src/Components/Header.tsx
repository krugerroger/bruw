'use client'

import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations & Tarifs', href: 'tarifs' },
    { name: 'Galerie', href: 'galerie' },
    { name: 'À propos', href: 'about' },
    { name: 'Commentaires/Témoignages', href: 'temoignages' },
    { name: 'Contact', href: 'contact' },
  ]

  return (
    <header className="navbar bg-black shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl font-serif italic text-pink-600">
          Béatrice
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-pink-500 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Bouton Disponibilités (Desktop) */}
        <Link
          href="tarifs"
          className="btn btn-primary hidden lg:inline-flex bg-pink-500 border-pink-500 hover:bg-pink-600 text-white"
        >
          Réserver
        </Link>

        {/* Menu Mobile (avec DaisyUI dropdown) */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
            {navLinks.map((link) => (
              <li key={`mobile-${link.name}`}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link href="#reserver" className="text-pink-500 font-semibold">
                Disponibilités
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
