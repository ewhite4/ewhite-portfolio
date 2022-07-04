import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h4> Evin White </h4>
                <ul className="icons">
                    <div>
                        <li>
                            < a href="https://github.com/ewhite4" target="_blank"></a>
                            <img src={require(`../assets/GitHub.png`)} alt="github" width="5%"></img>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a href="https://www.linkedin.com"></a>
                            <img src={require(`../assets/linkedIN.png`)} alt="LinkedIn" width="5%"></img>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;

