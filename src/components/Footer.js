import { Container, Row, Col } from "react-bootstrap";
import YNGG from "../assets/img/YNGG.png"
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navGit from "../assets/img/nav-git1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/nir-yahav" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/nirniryhv" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/nyahav" target="_blank"><img src={navGit} alt="Icon" /></a>
            </div>
            <p>	<em>©</em> Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
