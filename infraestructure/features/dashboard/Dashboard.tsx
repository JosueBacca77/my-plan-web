import Link from 'next/link'


export default function Dashboard() {
    return (
      <div>
      <nav>
        <ul>
          <li><Link href="/dashboard/students">Students</Link></li>
          <li><Link href="/dashboard/muscularGroups">Muscular groups</Link></li>
          <li><Link href="/dashboard/exercises">Exersices</Link></li>
        </ul>
      </nav>
      </div>
    )
  }