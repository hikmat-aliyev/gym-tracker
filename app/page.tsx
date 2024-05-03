import Link from 'next/link'

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href='/exercises'>Exercises</Link>
    </main>
  )
}
