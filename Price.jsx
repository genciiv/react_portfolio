import React from "react";

function Price(){

    const header = {
        subHeading: "Popular Pricing Plan For Creative Project",
        text:
        "When building a website, start here.Our shared service delivers a powerful,proven platform that's perfect for hosting your website."
    };

    const state = [
        {
        id:1,
        heading: "Basic",
        price: 30,
        msg1: "Web Design (UX/UI)",
        msg2: "Software Development",
        msg3: "Fashion Design (Arts)",
        msg4: "Web Development (App)",
        msg5: "Game Design & DV",
    },
    {
        id:2,
        heading: "Professional",
        price: 69,
        msg1: "Web Design (UX/UI)",
        msg2: "Software Development",
        msg3: "Fashion Design (Arts)",
        msg4: "Web Development (App)",
        msg5: "Game Design & DV",
    },
    {
        id:3,
        heading: "Business",
        price: 30,
        msg1: "Web Design (UX/UI)",
        msg2: "Software Development",
        msg3: "Fashion Design (Arts)",
        msg4: "Web Development (App)",
        msg5: "Game Design & DV",
    },
    ];

    return(
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h2 className="mainHeader">
                        {header.subHeading}
                    </h2>
                    <h6 className="mainContent">{header.text}</h6>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map((prices)=>(
                        <div className="col-4" key={prices.id}>
                            <div className="price">
                                <div className="priceHeading">${prices.heading}</div>
                                <div className="price__rs">
                                    <span>$</span>
                                    {prices.price}
                                </div>
                                <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>
                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                                </ul>
                                <div className="price__btn">
                                    <a href="Start" className="btn btn-outline">
                                        Start Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )   
}

export default Price;