import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-text-light p-5">
                <Container>
                    <div className="footer flex flex-col gap-2 text-center text-sm">
                        <h4>BiasaKeun</h4>
                        <p>Created By <a href="https://ynzhiao.my.id">Afif Waliyudin</a></p>
                        <div className="flex gap-3 justify-center align-middle items-center">
                            <a className="text-2xl" href="https://www.instagram.com/ynzhiao_"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a  className="text-2xl" href="https://www.github.com/afifudin24_"><FontAwesomeIcon icon={faGithub} /></a>
                            <a  className="text-2xl" href="https://www.linkedin.com/in/afif-waliyudin-aypeep/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;