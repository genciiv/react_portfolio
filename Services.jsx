import React from "react";

function Services(){

    const header = {
        mainHeader: "My Expertise",
        subHeading:"Provide Wide Range of Digital Services",
    };

    const state =[
        {
            id:1,
            icon:'./image/programming.png',
            heading:"UI/UX Design",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
        {
            id:2,
            icon:'./image/programming.png',
            heading:"Web Design",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
        {
            id:3,
            icon:'./image/programming.png',
            heading:"Web Development",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
        {
            id:4,
            icon:'./image/programming.png',
            heading:"App Development",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
        {
            id:5,
            icon:'./image/programming.png',
            heading:"Video Editing",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
        {
            id:6,
            icon:'./image/programming.png',
            heading:"SEO Expert",
            text:
            " I'm Creative UI/UX Designer , and I'm very passionate and dedicated to my work. With 7 years experience as a professional web developer"
        },
    ]

    return(
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info)=>(
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    <img src={info.icon} alt="" className="commonIcons"/>
                                    <h4 className="services__box-header">{info.heading}</h4>
                                    <p className="services__box-p">{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;