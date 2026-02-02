import React from 'react'
import Link from 'next/link'
function Button({ href, text }: { href: string, text: string }) {
  return (
    <Link href={href}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full h-15 cursor-pointer hover:bg-blue-600">
            <p className="text-3xl font-bold cursor-pointer "> {text}</p>
          </button>
        </Link>
  )
}

export default Button