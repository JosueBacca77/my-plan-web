import TableSkeleton from '@/app/components/TableSkeleton/TableSkeleton';
import Link from 'next/link'
import { Suspense } from "react";


export default function Students() {
    return (
        <div>
            <h1>Students</h1>
            <Suspense fallback={<TableSkeleton />}>
                <ul>
                    <li><Link href="/login">Student</Link></li>
                    <li><Link href="/login">Student</Link></li>
                </ul>
            </Suspense>
        </div>
    )
}