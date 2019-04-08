import React, { Component } from 'react';
import { PortfolioItem } from "./../PortfolioItem/PortfolioItem"

import stockmarketimage from "./../../assets/stockmarket.png"
import nytImage from "./../../assets/nytImage.png"
import beeImage from "./../../assets/beeIcon.png"


export class Portfolio extends Component {


    stockAppEntry = {
        title: "StockX: Pratical Pratice Stock Market App",
        body: <div>
            <p>StockX is a paper trading stock market app that was the second project I worked on at
                           Bootcamp.
                           The application allows the user to create an account, deposit imaginary money, and buy
                           shares with that money.
                           We utilized MySQL in order to store the user's transactions, balance, and positions, an
                           Express
                            backend in order to process purchase orders, <a href="https://iextrading.com/developer/">
                    IEXTrading in order to get stock quotes,</a> and Bootstrap to style the frontend.
                        </p>

            <p>
                StockX was a major 2 week collaboration between 4 people. My main contribution was writing
                the routing code and the purchasing logic.

                        </p>
        </div>,
        src : stockmarketimage
    }

    nytAppEntry = {
        title : 'NYT Article Community Recommender',
        body : 'Placeholder',
        src : nytImage
    }

    newbeeAppEntry = {
        title : 'Newbee Event Finder',
        body : 'Placeholder',
        src : beeImage
    }


    render() {
        return (<div> <div className="content-light margin">
            <div className="header4 bottomBorder"> Portfolio</div>
            <div className="flexContainer">


                <PortfolioItem data={this.stockAppEntry} root={this.props.root} ></PortfolioItem>
                <PortfolioItem data={this.nytAppEntry} root={this.props.root} ></PortfolioItem>
                <PortfolioItem data={this.newbeeAppEntry} root={this.props.root} ></PortfolioItem>




            </div>
        </div></div>);
    }
}