import React, { useEffect, useState } from 'react';
import "./user.css";
import { UserBase } from '../types/user';
import { error, table } from 'console';

const User: React.FC = () => {

    const [user, steUser] = useState<UserBase[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, SetError] = useState<string | null>(null)

    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users...!");
                }
                return response.json();
            })
            .then((data: UserBase[]) => {
                steUser(data);
                setIsLoading(false);
            })
            .catch((err) => {
                SetError(err);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error} </div>
    }

    return (
        <div className='table-container'>
            <h2>User List</h2>
            {
                user.length === 0 ? (
                    <div className='no-users'>No users found...</div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Age</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                user.map((user: UserBase) => (
                                    <tr key={user.id}>
                                        <th>{user.id}</th>
                                        <th>{user.name}</th>
                                        <th>{user.phone_no}</th>
                                        <th>{user.age}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }

        </div >
    );
}

export default User