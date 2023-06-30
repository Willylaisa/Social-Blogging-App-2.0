import React from 'react'
import "./login.css"
import Form from "../components/Form"


export default function Login() {
    return (
        <div>
            <section className='login--page'>
                <article>
                    <h3>Welcome to</h3>
                    <h1><strong>My Blog</strong></h1>
                </article>
                <div className='login--section'>
                    <h1>Log in</h1>
                    <Form />
                </div>
            </section>
        </div>
    )
}