import { ChangeEvent, useState, MouseEvent } from "react";

export default function Filters({submit}: {submit: Function}) {
    const [ titleName, setTitleName ] = useState("");

    const updateTitleName = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitleName(ev.target.value);
        console.log(titleName);
    }

    const submitForm = (ev: MouseEvent) => {
        submit();
    }

    return (
        <>
            <input value={titleName} type="text" onChange={updateTitleName}/>
            <button onClick={submitForm}>Submit</button>
        </>
    );
}