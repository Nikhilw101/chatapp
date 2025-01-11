import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import nik1 from "./nik4.png"
import Image from 'react-bootstrap/Image';
import { FaHome } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import  { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    try {
      const script1 = document.createElement('script');
      script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = "https://mediafiles.botpress.cloud/32f4c90e-9aaf-4e2f-9dee-d35bfc5928c8/webchat/v2/config.js";
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    } catch (error) {
      console.error("Error adding chatbot scripts:", error);
    }
  }, []);

  return (
    <>


<header>
      
   
    <Navbar bg="dark"  data-bs-theme="dark" >
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home"><FaLinkedin /></Nav.Link>
            <Nav.Link href="#features"><FaGithubSquare /></Nav.Link>
            <Nav.Link href="#pricing"><FaSquareInstagram /></Nav.Link>
          </Nav>

          <Nav className="ms-auto">
           
            <Nav.Link href="#features"><MdEmail /></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

    <Navbar bg="light" data-bs-theme="light" className=''>
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{marginRight:"8px" , marginLeft:"-20px"}}  ><FaHome size={"35px"} / ></Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#features">Education</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    </header>       

     <main>
  
     <Container fluid>
        <Row>
            <Col lg={12}>
                <center>
                    <Image src={nik1} fluid width={"250px"} className='myimage'/>  
                </center>
            </Col>
            <center>
                <Col lg={4} >
                    <h2 id='headp'>Computer engineering Student</h2>
                </Col>
            </center>
            <center>
                <Col lg={4}>
                <h3 id='para'>
                                    <Typewriter
                                        options={{
                                            strings: ["it's Nikhil here", "I’m interested in web development." , "I am passionate about creating dynamic web applications."],
                                            autoStart: true,
                                            cursor: ">>",
                                            typeSpeed: 500,
                                            backspeed: 25,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                </Col>
            </center>
        </Row>
    </Container>
    
    
          
     

     </main>
   
    
  



      
     
    </>
  )
}

export default Home