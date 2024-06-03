import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul className="flex justify-between pt-5 items-center">
            <div>
                <Link href="/">
                    <li>Home</li>
                </Link>
            </div>
            <div className="flex gap-5">
                <button>
                    Light
                </button>
                <button>
                    Dark
                </button>
                <button>
                    Retro
                </button>
                <button>
                    Valentine
                </button>
                <button>
                    Aqua
                </button>
            </div>
        </ul>
    </div>
  )
}
