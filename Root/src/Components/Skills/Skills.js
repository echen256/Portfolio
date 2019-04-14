import React, { Component } from "react";
import { Row } from "../Row/Row";
import {Progress} from "./Progress/Progress.js"
import gitIcon from "./../../assets/icons/git.png";
import phone from "./../../assets/icons/phone.png";
import email from "./../../assets/icons/email.png";
import linkedin from "./../../assets/icons/linkedIn.png";

export class Skills extends Component {
    /*   
     
    */

    render() {
        return (
            <div>
                <div className="content-dark ">
                    <div className="margin">
                        <div className="flexContainer">
                            <div className="skillsContainer">

                                <div className="whiteBorder header4"> Skills/Confidence</div>
                                <div className="margin-20px">
                                    <Row items={["CSS", <Progress value = {65}/>]}/>
                                    <Row items={["HTML", <Progress value = {80}/>]}/>
                                    <Row items={["Javascript/NodeJS", <Progress value = {85}/>]}/>

                                    <Row items={["Firebase", <Progress value = {50}/>]}/>

                                    <Row items={["Express", <Progress value = {69} />]}/>
                                    <Row items={["MongoDB", <Progress value = {60}/>]}/>
                                    <Row items={["MySQL", <Progress value = {50}/>]}/>

                                    <Row items={["React", <Progress value = {75}/>]}/>
                                    
                                   
                                </div>



                            </div>
                            <div class="skillsContainer ">
                                <div className="whiteBorder header4"> Contact</div>
                                <div className="margin-20px">
                                    <Row items={["Email: ericthechen@gmail.com"]} />
                                    <Row items={[<span>LinkedIn: <a href = "https://linkedin.com/in/eric-chen-0a760313a"> https://linkedin.com/in/eric-chen-0a760313a </a></span>]} />
                                    <Row items={["Phone: 510-386-4086"]} />
                                    <Row items={[<span> Github: <a href = "https://github.com/echen256"> https://github.com/echen256</a></span>]}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
