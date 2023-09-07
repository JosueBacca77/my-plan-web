import TableSkeleton from '@/infraestructure/components/TableSkeleton/TableSkeleton';
import { Suspense } from "react";
import StudentsList from './StudentsList';


export default function Students() {

    return (
        <>
        <h1>Students</h1>
        <Suspense fallback={<TableSkeleton />}>
               <StudentsList />
        </Suspense>
        </>
    )
}