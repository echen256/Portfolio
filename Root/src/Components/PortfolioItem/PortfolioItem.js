import React, { Component } from "react";

export class PortfolioItem extends Component {

    openModal () {
        console.log(this.props.root.state);
        if (! this.props.root.state.modalVisible){
            this.props.root.setState({
                modalTitle : "f",
                modalVisible : true,
                modalImage : this.props.src
            });
        }
        
    }



    constructor (props,context){
        super(props,context);
        this.openModal = this.openModal.bind(this);

    }

    render() {
        return (
            <div className="margin-20px" onClick = {this.openModal}>
                <img alt="null" src={this.props.src} width="200px" height="200px" />

            </div>
        );
    }




}