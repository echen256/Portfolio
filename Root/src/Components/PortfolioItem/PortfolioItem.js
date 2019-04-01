import React, { Component } from "react";


export class PortfolioItem extends Component {



    render() {
        return (

            <div className="margin-20px modalButton">
                    <img alt="null" src={this.props.src} width="200px" height="200px"/>
      
            </div>
        );
    }




}