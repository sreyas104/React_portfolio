import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';



function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_538nz6l', 'template_z3hbe7q', e.target, 'user_Phpn2iSaRK7TF6VZvNxQ8')
            .then((result) => {
                console.log(result);
                
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className='text-white pb-5 pt-5' style={{ backgroundColor: "#121025" }}>
            <Container >
                <Row>
                    <div className='col-md-6 mt-5'>
                        <h3 style={{ color: "#f6c427" }}>Let's gettogether to make something better</h3>
                        <h4><FaPhoneAlt />&nbsp;&nbsp;6282522829</h4>
                        <h4><FaMailBulk />&nbsp;&nbsp; sreyas873@gmail.com</h4>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type='text' placeholder='Name' name="name" required />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name='email' required />
                                <Form.Label>Subject:</Form.Label>
                                <Form.Control type='text' placeholder='Mail-subject' name="subject" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label name="message" required>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" style={{ backgroundColor: "#f6c427" }}>SUBMIT</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Contact



