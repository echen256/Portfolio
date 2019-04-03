import React, { Component } from 'react';
import "./../App.css"
import { Navbar } from '../Components/Navbar/Navbar';
import { UserPic } from "../Components/UserPic/UserPic";
import { Description } from "../Components/Description/Description";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { Modal } from "../Components/Modal/Modal";
import { Skills } from "../Components/Skills/Skills";
import { Contact } from '../Components/Contact/Contact';


export class Home extends Component {

    state = {
        modalTitle: "Placeholder Title",
        modalBody: "Placeholder Body",
        modalGitUrl: "Placeholder URL",
        modalHerokuUrl: "Placeholder URL",
        modalVisible: false,
        modalImage : ""
    }
 


    render() {
        return (
            <div>
                <div>
                    {this.state.modalVisible ? <Modal root={this} /> : <div />}
                </div>
                <div>
                    <Navbar />
                    <UserPic />
                    <Description />
                    <Portfolio root={this} />

                    


                    <Skills />
                    <Contact />
                </div>

            </div>

        );
    }
}

