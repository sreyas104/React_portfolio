import React from 'react'
import { Card, Carousel, Container, Row } from 'react-bootstrap'
import { MdDeveloperMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";

function Services() {
    return (
        <div className='w-100' style={{ backgroundColor: "#121327" }}>
            <Container>
                <Row>
                    <div className='col-md-12'>
                        <h1 className='text-center mt-5' style={{ color: "#f5c533" }}>MY SERVICES</h1>
                        <Carousel>
                            <Carousel.Item>
                                <div className='row w-100 p-5 m-5'>
                                    <Card style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body className='text-center '>
                                            <MdDeveloperMode style={{ fontSize: "50px" }} />
                                            <Card.Text>
                                                <h3>
                                                    Web Development
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                    vel placerat condimentum.
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body>
                                            <SiAdobexd style={{ fontSize: "50px" }} />
                                            <h3>Ui/UX DESIGN</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card >
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }} >

                                        <Card.Body>
                                            <SiAdobeillustrator style={{ fontSize: "50px" }} />
                                            <h3>Graphic Design</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='row w-100 p-5 m-5'>
                                    <Card style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body className='text-center '>
                                            <MdDeveloperMode style={{ fontSize: "50px" }} />
                                            <Card.Text>
                                                <h3>
                                                    Web Development
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                    vel placerat condimentum.
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body>
                                            <SiAdobexd style={{ fontSize: "50px" }} />
                                            <h3>Ui/UX DESIGN</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card >
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }} >

                                        <Card.Body>
                                            <SiAdobeillustrator style={{ fontSize: "50px" }} />
                                            <h3>Graphic Design</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card>

                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='row w-100 p-5 m-5'>
                                    <Card style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body className='text-center '>
                                            <MdDeveloperMode style={{ fontSize: "50px" }} />
                                            <Card.Text>
                                                <h3>
                                                    Web Development
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                    vel placerat condimentum.
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }}>

                                        <Card.Body>
                                            <SiAdobexd style={{ fontSize: "50px" }} />
                                            <h3>Ui/UX DESIGN</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card >
                                    <Card className='text-center' style={{ maxWidth: "15rem", margin: "10px", backgroundColor: "#f5c533", boxShadow: "10px 10px 5px black", color: "#121327" }} >

                                        <Card.Body>
                                            <SiAdobeillustrator style={{ fontSize: "50px" }} />
                                            <h3>Graphic Design</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum turpis
                                                vel placerat condimentum.
                                            </p>
                                        </Card.Body>
                                    </Card>

                                </div>

                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Services