import { useState } from 'react'

const State = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const isPasswordMatch = form.password === form.confirmPassword
    const showPasswordError = form.confirmPassword.length > 0 && !isPasswordMatch


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value  //This is a bit of ES6 magic. The square brackets [] around name tell JavaScript: "Don't use the literal string 'name'; instead, use the value stored in the variable called name."
        }))
    }
    console.log(form.password, form.confirmPassword);

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
            }}
            >
                <label htmlFor="name">Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} className='border-2' />
                </label>
                <br />
                <br />
                <label htmlFor="email">Email:

                    <input type="email" name="email" value={form.email} onChange={handleChange} className='border-2' />
                </label>
                <br />
                <br />
                <label htmlFor="password">Password:

                    <input type="password" name="password" value={form.password} onChange={handleChange} className='border-2' />
                </label>
                <br />
                <br />
                <label htmlFor="confirmPassword">Confirm Password:

                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className='border-2'
                        style={{ borderColor: showPasswordError ? 'red' : 'white' }}
                    />
                </label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form >
        </>

    )
}

export default State