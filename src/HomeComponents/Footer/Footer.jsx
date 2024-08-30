import React from 'react'
import './Footer.css'
import navlogo from '../Assets/logo.png'
import ig from '../Assets/ig.png'
import linkedin from '../Assets/linkedin.png'
import x from '../Assets/x.jpg'
import email from '../Assets/email.png'

const Footer = () => {
    return (
        <div classname='footer-section' id='footermain'>
            <h1 id='footh1'>CONTACT <span id='spanimpact'>US</span></h1>
            <div className='footermain2'>
                <div className='footerleft'>
                    <div><img src={navlogo} alt="" id='navlogo' /></div>
                    <p id='fop'>Anmol Jeevan is dedicated to <br />transforming lives through education, <br />healthcare, and community support,<br /> fostering hope and sustainable change.</p>
                </div>

                {/* <div className='footermaps'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9716141382025!2d72.85483373470099!3d19.02222315365996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1690807913559!5m2!1sen!2sin"
                        width="370"
                        height="250"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div> */}

                <div className='footermaps'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15069.436171351158!2d72.8344565!3d19.0981454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91834d07161%3A0x2b97a80a0b4a330f!2sDynamic%20Welfare%20Sansta%20NGO%20for%20Human%20Rights!5e0!3m2!1sen!2sin!4v1690807913559!5m2!1sen!2sin"
                        width="370"
                        height="250"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>



                <div>
                    <h2 id='midsocial'>Our <span id='spanimpact'>Social</span> Media</h2>
                    <div className='footermid'>
                        <div id='linkedin'><img src={linkedin} alt="" /></div>
                        <div id='ig'><img src={ig} alt="" /></div>
                        <div id='x'><img src={x} alt="" /></div>
                    </div>
                </div>

                <div>
                    <h2 id='midsocial1'>Contact <span id='spanimpact'>Details</span></h2>
                    <div className='footerright'>
                        <div className='emailcont'>
                            <img src={email} alt="" />
                            <h3>rinnaygajjar@gmail.com</h3>
                        </div>
                        <div className='emailcont1'>
                            <img src={email} alt="" />
                            <h3>pairushaan64@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
