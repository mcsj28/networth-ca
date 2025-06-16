import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

export const metadata: Metadata = {
  title: 'Mani',
  description: 'Your personal finance tracker',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body>
        <SessionContextProvider supabaseClient={supabase} initialSession={session}>
          {children}
        </SessionContextProvider>
      </body>
    </html>
  )
} 