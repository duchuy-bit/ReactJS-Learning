import React, { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

const User2 = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: "Rock",
            email: "Rocklee@gmail.com",
        });
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div> User name is {user.name}</div>
            <div> User email is {user.email}</div>
        </div>
    );
};

export default User2;
