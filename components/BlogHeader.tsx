import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'
import Header from './Header'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <>
          <header className="mt-16 mb-5 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <h1 className="font-bold text-white leading-tight tracking-tighter md:text-4xl">
              {title}
            </h1>
            <h4
              className={`mt-5 text-center text-lg text-zinc-500 md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </header>
        </>
      )

    case 2:
      return (
        <div className='mb-10'>
        <Header />
          {/* <header className="mt-16 mb-5 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <h2 className="mt-3 mb-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            </h2>
          </header> */}
        </div>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
