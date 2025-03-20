'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { TOPICS } from './data'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white"
        >
          Hoang Son Tung (Thomas Hoang)
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="mt-2 text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {TOPICS}
        </TextEffect>
      </div>
    </header>
  )
}
