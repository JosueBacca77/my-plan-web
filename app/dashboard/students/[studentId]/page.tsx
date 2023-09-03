import StudentSkeleton from "@/infraestructure/components/students/student/StudentSkeleton";
import Student from "@/infraestructure/features/students/student/Student";
import { Suspense } from "react";

export default function StudentPage({ params }: { params: { studentId: string } }) {

  const { studentId } = params;

  return (
    <Suspense fallback={<StudentSkeleton />}>
        <Student studentId={studentId} />
    </Suspense>
    )
  }