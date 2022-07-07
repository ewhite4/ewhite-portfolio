import React from "react";
import { LogoGithubIcon } from '@primer/octicons-react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h4> Evin White </h4>
                <ul className="icons" target="_blank">
                    <div>
                                <a href="https://github.com/Moonman9/nerd_wallet" target="_blank">
                                    <LogoGithubIcon size="small" aria-label="GitHub" />
                                </a>                      
                    </div>
                    <div>
                            <a href="https://www.linkedin.com/in/evin-white-456b5b132/" target="_blank"></a>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;

