'use client';
import useGetStudent from "@/infraestructure/hooks/students/useGetStudent";

interface StudentProps {
    studentId: string
}

export default function Student(studentProps:StudentProps){

    const { studentId } = studentProps;

    const { data } = useGetStudent({studentId});
    
    return(
        <div style={{background:'lightgreen'}}>STUDENT </div>
    )
}