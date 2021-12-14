import React from "react";
import Phone from '../../images/phone.svg';
import Mail from '../../images/mail.svg';
import LinkedIn from '../../images/linkedin.svg';
import Github from '../../images/github.svg';
import Resume from '../../images/resume.pdf'
import './Contact.css'

function Contact()
{
    return(
        <footer className="footer mt-auto py-3 text-center">
            <h4>If you like what you see, connect with me through</h4>
            <div className="container my-4">
                <div className="row">     
                    <div className="col-sm-3">
                        <a href="tel:321-693-3994">
                            <img src={Phone} alt="(321)693-3994" />
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="mailto:averystahl@hotmail.com">
                            <img src={Mail} alt="averystahl@hotmail.com" />
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://www.linkedin.com/in/avery-stahl-916373143/" target='_blank'>
                            <img src={LinkedIn} alt="https://www.linkedin.com/in/avery-stahl-916373143/" />
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://www.github.com/maimbrain" target='_blank'>
                            <img src={Github} alt="github.com/maimbrain" />
                        </a>
                    </div>
                </div>
            </div>
            <a href={Resume} download="Avery Stahl Resume">
                <h4>Download my Resume!</h4>
            </a>
        </footer>
    )
}

export default Contact;