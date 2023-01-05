import React from "react";

function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>G-code</h1>
                                <p>I am Full Stack Develpoper ,Web Designer <br /> UI/UX Designer,Graphic Designer</p>
                                <div className="header__button">
                                    <a href="header" className="btn btn-outline">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-6">
                            <img src="./image/coder.png" alt="" className="image" />
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header;