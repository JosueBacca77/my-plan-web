'use client'
import useGetStudent from "@/infraestructure/hooks/students/useGetStudent";
import { useEffect } from "react";

interface StudentProps {
    studentId: string
}

export default function Student(studentProps:StudentProps){

    const { studentId } = studentProps;

    const { data } = useGetStudent({studentId});

    useEffect(() => {
        console.log('studentId',studentId)
    }, [studentId])
    
    return(
        <div style={{background:'lightgreen'}}>STUDENT </div>
    )

}