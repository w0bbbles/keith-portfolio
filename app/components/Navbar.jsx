import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/"><h1>Keith Kwan</h1></Link>
      <Link href="/">Home</Link>
      <Link href="/works">Portfolio</Link>
    </nav>
  )
}