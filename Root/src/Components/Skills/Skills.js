import React, { Component } from "react";
import { Row } from "../Row/Row";

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
                                    <Row items={["Express","O O O"]} />
                                    <Row items={["Node", "O O O O"]} />
                                    <Row items={["MongoDB", "O O"]} />
                                    <Row items={["MySQL", "O O  O"]} />
                                    <Row items={["React", "O O O O"]} />
                                </div>



                            </div>
                            <div class="skillsContainer ">
                                <div className="whiteBorder header4"> Contact</div>
                                <div  className="margin-20px">
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
