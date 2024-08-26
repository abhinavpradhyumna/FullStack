import { useState } from "react";

function Details() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [mail, setMail] = useState("xyz@gmail.com")

    async function Add() {
        setName(document.getElementById("name").value)
        setAge(document.getElementById("age").value)
        setMail(document.getElementById("mail").value)
        const obj = {
            name: name,
            age: age,
            mail: mail
        }
        try {
            const response = await fetch("http://localhost:3001", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj),
                method: "POST"
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name:</label>
                <input type="text" id="name">
                </input>
                <br />
                <label>Reg No:</label>
                <input type="number" id="age">
                </input>
                <br />
                <label>Mail ID</label>
                <input type="text" id="mail">
                </input>
                <br />
                <button onClick={Add}>
                    Add
                </button>
            </form>

        </div>
    )
}

export default Details;
