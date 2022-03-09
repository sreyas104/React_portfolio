import React from 'react'
import { Button, Container } from 'react-bootstrap'
import profilepic from '../Image/propic.jpeg'
import '../style.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare, } from "react-icons/fa";



function Intro() {
    return (
        <div className='intro' style={{backgroundColor:"#121025"}}>
            <Container>
                <div className='row'>
                    <div className='section-1 col-md-6 text-left text-white mt-5 '>
                        <h4 style={{color:"#f5c533"}}>HELLO</h4>
                        <h2 className='col-sm-8 col-md-12'>I'm <span style={{color:"#f5c533"}}>SREYAS R</span></h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                            vel placerat condimentum. Nam tempus risus et tincidunt dapibus.</h4>
                        <div className=' col-8 row m-4 ML-0'>

                            <Button style={{backgroundColor:"#f5c533"}} varient="success">Download CV</Button>
                            <div className=''>

                            <FaFacebookSquare style={{fontSize: "50px"}}/>
                            <FaInstagramSquare  style={{fontSize: "50px"}}/>
                            <FaLinkedin style={{fontSize: "50px"}} />
                            <FaWhatsappSquare style={{fontSize: "50px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className='section-2 col-md-6'>
                        <img className='col-md-8 mt-5' style={{borderRadius:"15px 150px"}} src={profilepic} alt="propic" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Intro