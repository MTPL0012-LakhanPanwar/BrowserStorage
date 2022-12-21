import React, { useEffect, useState } from 'react'

export default function FormApp() {

    const [name,setName] = useState('');

    const [email,setEmail] = useState('');

    const win = window.sessionStorage;

    const submit = (e)=>{
        e.preventDefault();
        win.setItem('name',name);
        win.setItem('email',email);
        setName('');
        setEmail('');
        // console.log(name,email);
    }

    useEffect(
        ()=>{

            if(win.getItem('name'));
            setName(win.getItem('name'));

            if(win.getItem('email'));
            setEmail(win.getItem('email'));
            
        } , []
    );

    // useEffect(
    //     ()=>{
    //         win.setItem('name',name);
    //         win.setItem('email',email);
    //     } , [name,email]
    // )

    return (
        <div>
            <form onSubmit={submit}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>Enter your Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
