import React, { Component } from 'react';
import {PortfolioItem} from "./../PortfolioItem/PortfolioItem"

import stockmarketimage from "./../../assets/stockmarket.png"
import nytImage from "./../../assets/nytImage.png"


export class Portfolio extends Component {


    stockMarketData = {
        title : "StockX: Practical Practice Stock Trading Application"
    }




    render() {
        return (<div> <div className="content-light margin">
            <div className="workHeader bottomBorder"> Portfolio</div>
            <div className="workContainer">

                <PortfolioItem root = {this.props.root} src = {stockmarketimage}></PortfolioItem>

                <PortfolioItem root = {this.props.root} src = {nytImage}></PortfolioItem>


           
            

            </div>
        </div></div>);
    }
}