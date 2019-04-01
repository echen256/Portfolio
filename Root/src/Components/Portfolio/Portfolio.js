import React, { Component } from 'react';
import {PortfolioItem} from "./../PortfolioItem/PortfolioItem"

import stockmarketimage from "./../../assets/stockmarket.png"
import nytImage from "./../../assets/nytImage.png"


export class Portfolio extends Component {
    render() {
        return (<div> <div className="content-light margin">
            <div className="workHeader bottomBorder"> Portfolio</div>
            <div className="workContainer">

                <PortfolioItem src = {stockmarketimage}></PortfolioItem>
                <PortfolioItem src = {nytImage}></PortfolioItem>
           
            

            </div>
        </div></div>);
    }
}