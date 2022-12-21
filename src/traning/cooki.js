import React from 'react'
import { useCookies } from "react-cookie";

export default function CookiApp() {

    const [cookies, setCookie] = useCookies(["user"]);

    function handleCookie() {
        setCookie("user", "user1", {
            path: "/",
            maxAge:3600
        });
    }
    return (
        <div className="App">
            <h1>React cookies</h1>
            {cookies.user && <p>{cookies.user}</p>}
            <button className='btn' onClick={handleCookie}>Set Cookie</button>
        </div>
    );
}
