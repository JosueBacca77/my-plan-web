import Link from "next/link";

export default async function StudentsList(){

    const datatest = await new Promise((resolve)=> setTimeout(resolve,1000));

    return(
        <ul>
            <li><Link href="/dashboard/students/1">Student1</Link></li>
            <li><Link href="/dashboard/students/2">Student2</Link></li>
        </ul>
    )
}