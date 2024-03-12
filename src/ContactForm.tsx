import React, { useState } from 'react';
import './ContactForm.scss';
import ContactImage from './assets/OBJECTS.svg';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // you can see the console to see the form data when we connect to the backend it will help us to send data to database.
    };

    return (
        <div className="container contact-form-container">
            <div className="row container-row">
                <div className="col-md-8 my-5">
                    <h2 className='main-heading'>Contact Us</h2>
                    <p className='para-text'>Book a call or write us to discover our different options. Whether it's membership for recurring missions or more "classic" quotes for big projects, we have the right package for you.</p>

                    <form className='main-form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Input your full name in here" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Input your Email in here" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" className="form-control" placeholder="Questions" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea rows={4} name="message" id="message" className="form-control" placeholder="Input your Messages in here" value={formData.message} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <button type="submit" className="btn btn-light form-control contactus-btn">Submit</button>
                        </div>

                    </form>
                </div>
                <div className="col-md-4 my-5 contact-img-div">
                    <img src={ContactImage} alt="Contact" className="img-fluid contact-img" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
