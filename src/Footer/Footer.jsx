import { faFacebook, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <footer className="footer sm:footer-horizontal p-10">
                <aside className='max-w-[350px]'>
                    <h1>CS- Ticket System</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact Saled</a>
                    <a className="link link-hover">Our Mission</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className='footer-title'>Social Links</h6>
                    <a href="">
                        <FontAwesomeIcon icon={faXTwitter} className='me-2'/>
                        @CS-Ticket System</a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} className='me-2'/>
                        @CS-Ticket System</a>
                    <a href=""> 
                        <FontAwesomeIcon icon={faFacebook} className='me-2'/>
                        @CS-Ticket System</a>
                    <a href="">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        support@cst.com</a>
                </nav>
            </footer>

            <aside className='text-center'>
                <p>© {new Date().getFullYear()} CS - Ticket System. All rights reserved.</p>
            </aside>
                        
        </div>
    );
};

export default Footer;