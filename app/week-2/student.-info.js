import Link from 'next/link'; 

export default function StudentInfo() {
  return (
    <main>
      <h1>Kiru Hankebo</h1>
      <li>
        <Link href="https://github.com/Kiru1288/cprg306-assignments.git" className="underline text-cyan-600 hover:text-cyan-300"> 
          GitHub 
        </Link>
      </li>
    </main>
  );
}
