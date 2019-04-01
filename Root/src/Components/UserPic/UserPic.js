import React, { Component } from "react";
import portfolioPic from "./../../assets/portfolioPic.png"

export class UserPic extends Component {
    render() {
        return (<div><div className="content-light">
            <div className="introduction justified ">

                <div className="circularCropper">
                    <img alt="null" className="rounded portfolioPic" src={portfolioPic}>
                    </img>
                </div>

                <div>
                    <div className=" bottomBorder">
                        Eric Chen
                </div>

                    <div className="justified font-med ">
                        Full Stack Web Developer
                </div>
                </div>


            </div>


        </div>
        </div>
        );
    }
}
