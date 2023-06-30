import React from 'react'
import "./login.css"


export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            value: ""
        }
    )
    function handleChange(event) {

        const {name, value} = event.target
        setFormData(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
    }
    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.confirmPassword ?
        window.open("/Social-Blogging-App-2.0/", "_self"):
        alert("passwords do not match")
    }
    return (
        <div>
            <section className='login--page'>
                <article>
                    <h3>Welcome to</h3>
                    <h1><strong>My Blog</strong></h1>
                </article>
                <div className='login--section'>
                    <h1>Sign up</h1>
                    <form className="login--form" onSubmit={handleSubmit}>
                        <div className="login--email label">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="johndoe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='label'>
                            <label htmlFor="password">Password: </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="********" 
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='confirm--password label'>
                            <label htmlFor="password">Confirm password: </label>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                id="confirmPassword" 
                                placeholder="********" 
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button>Sign up</button>
                    </form>
                </div>
            </section>
        </div>
    )
}