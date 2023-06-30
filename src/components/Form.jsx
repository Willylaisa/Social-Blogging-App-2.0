import React from "react"
import "../pages/login.css"
import { Link } from "react-router-dom"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
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
        console.log(formData)
    }
    function handleSubmit(event) {
        event.preventDefault()
        window.open("/Social-Blogging-App-2.0/", "_self")
    }

    return (
        <div>
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
                <div className="label">
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
                <button>Log in</button>
            </form>
            <br />
            <p className="signup">New to My Blog?
                <Link to="/signup" className="signup--link"> Sign up</Link>
            </p>
        </div>
    )
}