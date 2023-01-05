import React from "react";

function About(){
    return(
        <div className="about">
            <div className="container">

                <div className="common">
                    <h1 className="about-title">About Me</h1>
                    <div className="underline-border"></div>
                </div>

                <div className="row h-650 alignCenter">
                    <div className="vol-6">
                        <div className="about__img">
                            <img src="./image/genci.png" alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about__info">
                            <h1>Creative UI/UX Design <br /> based in Tirana, Albania</h1>
                            <div className="about__info">
                                <p>
                                    I'm Creative UI/UX Designer , and I'm very passionate 
                                    and dedicated to <br />my work. With 7 years experience as a professional 
                                    web developer, I <br /> have acquired the skills and knowledge necessary to
                                    make your project <br /> a success. I enoy every step of the design process,
                                    from discussion <br /> and collaboration.
                                    <br />
                                    <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus earum 
                                    rerum distinctio illo praesentium dicta debitis sequi beatae? Corrupti 
                                    laudantium nostrum dolorum dicta nobis impedit earum tempora repellendus labore quibusdam?
                                </p>
                                <div className="about__buttons">
                                    <a href="#about" className="btn about-btn-outline">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;