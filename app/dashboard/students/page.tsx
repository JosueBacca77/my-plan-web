import TableSkeleton from '@/app/components/TableSkeleton/TableSkeleton';
import Link from 'next/link'
import { Suspense } from "react";


export default function Students() {
    return (
        <div>
            <h1>Students</h1>
            <Suspense fallback={<TableSkeleton />}>
                <ul>
                    <li><Link href="/dashboard/students/newPlan">Student1</Link></li>
                    <li><Link href="/dashboard/students/newPlan">Student2</Link></li>
                </ul>
            </Suspense>
        </div>
    )
}