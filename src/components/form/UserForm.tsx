import React, { useState } from 'react';

const UserForm: React.FC = () => {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const user = {
            name: name.trim(),
            phone_no: Number(phoneNo),
            age: Number(age),
        }

        try {
            const response = await fetch("http://localhost:8000/users", {
                "method": "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`User created: ${data.name}`);
                setName('');
                setAge('');
                setPhoneNo('');
            }
            else {
                setMessage("Error creating message...");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage(`Server error: ${error}`)
        }


    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div>
                <label>Name</label>
                <input value={name} onChange={e => setName(e.target.value)} required />
            </div>

            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
            </div>

            <div>
                <label>Phone No</label>
                <input type="number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required />
            </div>

            <button type='submit'>Save</button>

            {message && <p> {message} </p>}
        </form>
    );
};

export default UserForm;