import React, {useState} from "react";

export default function Form(){

    const initialFormData = {
        name: "",
        email: "",
        message: ""
    }

    const [formData, setFormData] = useState(initialFormData);

    function handleChange(e){
        const {name, value} = e.target;
        console.log(name, value);
        setFormData(prevData => (
            {...prevData, [name]: value}
        ))
    }

    return (
        <form id="contact-form">
            <div className="form-field">
                <label for="name">Name</label>
                <input 
                    type="text"
                    value={formData.name}
                    name="name"
                    required
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                <label for="name">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                    placeholder="Enter your email"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea 
                    value={formData.message}
                    name="message"
                    required
                    placeholder="Enter message here"
                    onChange={handleChange}
                />

            </div>
            <button type="submit">Submit</button>
        </form>
    )
}