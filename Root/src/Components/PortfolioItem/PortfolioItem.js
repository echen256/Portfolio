import React, { Component } from "react";

export class PortfolioItem extends Component {

    openModal () {
        console.log(this.props.root.state.modalVisible);
        if (! this.props.root.state.modalVisible){
            this.props.root.setState({
                modalVisible : true,
                data : this.props.data
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
                <img className = "portfolioItemPic" alt="null" src={this.props.data.src}/>

            </div>
        );
    }




}