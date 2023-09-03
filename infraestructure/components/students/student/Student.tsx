interface StudentProps {
    id: string
}

export default function Student(studentProps:StudentProps) {

    const { id } = studentProps;

    return (
        <>
        El student {id}
        </>
    )
}