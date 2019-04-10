import React, { Component } from "react";
import { Row } from "../Row/Row";
import {Progress} from "./Progress/Progress.js"

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

                                <div className="whiteBorder header4"> Skills</div>
                                <div className="margin-20px">
                                    <Row items={["Express", <Progress value = {69} />]}/>
                                    <Row items={["Node", <Progress value = {80}/>]}/>
                                    <Row items={["MongoDB", <Progress value = {40}/>]}/>
                                    <Row items={["MySQL", <Progress value = {50}/>]}/>
                                    <Row items={["React", <Progress value = {75}/>]}/>
                                </div>



                            </div>
                            <div class="skillsContainer ">
                                <div className="whiteBorder header4"> Contact</div>
                                <div className="margin-20px">
                                    <Row items={["Email: ericthechen@gmail.com"]} />
                                    <Row items={["LinkedIn:"]} />
                                    <Row items={["Phone: 510-386-4086"]} />
                                    <Row items={["Github:"]} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
