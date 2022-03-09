import React from 'react'
import { Container, ProgressBar, Row } from 'react-bootstrap'
import propic2 from '../Image/propic2.jpeg'
import '../style.css'


function About() {
    return (
        <div className='text-white pt-5 pb-5' style={{backgroundColor:"#121327",}}>
            <Container>
                <Row>
                    <div className='about-1 col-md-6  ' style={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ maxWidth: "25rem " ,maxHeight:'20rem', borderRadius:"50%" }} src={propic2} alt="pic 2" />
                    </div>
                    <div className='about-2 col-md-6' style={{ justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{color:"#f5c533"}}>ABOUT ME</h1>
                        <h3 style={{color:"#f5c533"}}>Im a web-developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                            vel placerat condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                            vel placerat condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                            vel placerat condimentum.</p>
                    </div>
                </Row>
                <Row style={{backgroundColor:"#121025"}}>
                    <div className='my-skills w-100 mt-5' >
                        <h1 style={{color:"#f5c533"}} >MY SKILLS</h1>
                        <div className='skill m-5'>
                            <Row>
                                <div className='col-md-6'>
                                    <span>
                                    <p>HTML and CSS</p>
                                    <ProgressBar now={80}  />
                                    </span>
                                    <span>
                                    <p>Bootstrap</p>
                                    <ProgressBar now={80} />
                                    </span>
                                    <span>
                                    <p>JavaScript</p>
                                    <ProgressBar now={70} />
                                    </span>
                                </div>
                                <div className='col-md-6'>
                                    <span>
                                    <p>React JS</p>
                                    <ProgressBar now={70} />
                                    </span>
                                    <span>
                                    <p>PHP</p>
                                    <ProgressBar now={40} />
                                    </span>
                                    <span>
                                    <p>Illustrator</p>
                                    <ProgressBar now={60} />
                                    </span>
                                </div>
                            </Row>
                        </div>

                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default About