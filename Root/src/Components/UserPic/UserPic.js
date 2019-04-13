import React, { Component } from "react";
import portfolioPic from "./../../assets/p5.jpg"

export class UserPic extends Component {
    render() {
        return (<div><div className="margin-thick content-light">
            <div className="introduction justified ">

                <div className="circularCropper">
                    <img alt="null" className="rounded portfolioPic" src={portfolioPic}>
                    </img>
                </div>


                <div style = {{marginLeft:"5%"}}>
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
