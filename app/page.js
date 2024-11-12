import Link from 'next/link'; 

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul>
          <li>
            <Link href="/week-2">
              Week 2 Page
            </Link>
            <b></b>
            <Link href="/week-3">
              Week 3 Page
            </Link>

            <Link href="/week-4">
              Week 4 Page
            </Link>

            <Link href="/week-5">
              Week 5 Page
            </Link>


            <Link href="/week-6">
              Week 6 Page
            </Link>

            <Link href="/week-7">
              Week 7 Page
            </Link>

            <Link href="/week-8">
              Week 8 Page
            </Link>

            <Link href="/week-9">
              Week 9 Page
            </Link>


          </li>
        </ul>
      </nav>
    </main>
  );
}
