import React, { Component } from "react";

export class PortfolioItem extends Component {

    openModal () {
        console.log(this.props.root.state.modalVisible);
        if (! this.props.root.state.modalVisible){
            this.props.root.setState({
                modalVisible : true,
                modalImage : this.props.data.src,
                modalTitle : this.props.data.title,
                modalBody: this.props.data.body
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
                <img alt="null" src={this.props.data.src} width="70%" height = "auto" />

            </div>
        );
    }




}