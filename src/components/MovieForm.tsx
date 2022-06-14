import { useNavigate } from "react-router-dom";

export default function MovieForm() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>Edit</h1>
        </>
    );
}