import React from 'react'
import './Sponsor.css'

const Sponsor = () => {
    return (
        <div
            className="tiers" id='tiera'
        >
            {/* <span className="ok">TIERS</span> */}
            <h1 className='ok'>SPONSORSHIP <span id='spanimpact'>TIERS</span></h1>
            <div className="all">
                <div className="tier">
                    <div className="before">
                        <span>SAPPHIRE</span>
                        <br />
                        <span>&#8377;15,000&#43;</span>
                    </div>
                    <div className="after">
                        <ul>
                            <li>STICKER</li>
                            <li>CERTIFICATE OF GRATITUDE</li>
                            <li>POSTER</li>
                            <li>BADGE</li>
                        </ul>
                    </div>
                </div>
                <div className="tier">
                    <div className="before">
                        <span>EMERALD</span>
                        <br />
                        <span>&#8377;30,000&#43;</span>
                    </div>
                    <div className="after">
                        <ul>
                            <li>STICKER</li>
                            <li>CERTIFICATE OF GRATITUDE</li>
                            <li>POSTER</li>
                            <li>WRIST BAND</li>
                            <li>BADGE</li>
                        </ul>
                    </div>
                </div>
                <div className="tier">
                    <div className="before">
                        <span>RUBY</span>
                        <br />
                        <span>&#8377;50,000&#43;</span>
                    </div>
                    <div className="after">
                        <ul>
                            <li>STICKER</li>
                            <li>CERTIFICATE OF GRATITUDE</li>
                            <li>POSTER</li>
                            <li>WRIST BAND & CAP</li>
                            <li>EXCULSIVE ENTRY TO ALL NGO EVENTS</li>
                        </ul>
                    </div>
                </div>
                <div className="tier">
                    <div className="before">
                        <span>DIAMOND</span>
                        <br />
                        <span>&#8377;1,00,000&#43;</span>
                    </div>

                    <div className="after">
                        <ul>
                            <li>NAME ON NGO MERCH</li>
                            <li>STICKER & BADGE</li>
                            <li>CERTIFICATE OF GRATITUDE</li>
                            <li>POSTER</li>
                            <li>WRIST BAND</li>
                            <li>EXCULSIVE ENTRY TO ALL NGO EVENTS</li>
                            <li>SPECIAL MENTION ON WEBSITE</li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecMERLwROFMNBVpgALAywqmwVcaKf9meDeHGNMg6JeW_FEMg/viewform" target="_blank" rel="noopener noreferrer">
                <button id='sponsorbtn' clas>SPONSOR US</button>
            </a>

        </div>
    )
}

export default Sponsor