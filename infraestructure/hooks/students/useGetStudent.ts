import { useEffect, useState } from "react";

interface UseGetStudentProps {
  studentId: string;
}

interface Student {
  id: string,
  name: string
}

async function getStudent(id: string) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 4000);
  });

  await myPromise;

  return {
    id: id,
    name: 'Josue'
  };
}

export default function useGetStudent(useGetStudentProps: UseGetStudentProps) {
  const { studentId } = useGetStudentProps;
  const [data, setData] = useState<Student | null>(null);
  
  useEffect(() => {
    async function fetchData() {
      const studentData = await getStudent(studentId);
      setData(studentData);
    }

    fetchData();
  }, [studentId]);

  return { data };
}
