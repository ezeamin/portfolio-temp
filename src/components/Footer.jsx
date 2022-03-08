import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='text-center mt-5 mb-0 footer'>
            <p className='mb-2'>Portfolio in progress.</p>
            <div className="footer__media">
                <a href="https://www.linkedin.com/in/ezequielamin/" target="_blank" rel="noreferrer" className='footer__social'>
                    <img src="/img/social/linkedin.png" alt="linkedin" className='footer__social-icon' />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+5493815038570" target="_blank" rel="noreferrer" className='footer__social'>
                    <img src="/img/social/whatsapp.png" alt="whatsapp" className='footer__social-icon' />
                </a>
                <a href="mailto:ezequielamin@outlook.com" target="_blank" rel="noreferrer" className='footer__social'>
                    <img src="/img/social/mail.png" alt="mail" className='footer__social-icon' />
                </a>
            </div>
        </div>
    );
};

export default Footer;