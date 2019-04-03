import React, { Component } from 'react';
import { PortfolioItem } from "./../PortfolioItem/PortfolioItem"

import stockmarketimage from "./../../assets/stockmarket.png"
import nytImage from "./../../assets/nytImage.png"


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


    render() {
        return (<div> <div className="content-light margin">
            <div className="workHeader bottomBorder"> Portfolio</div>
            <div className="workContainer">

                <PortfolioItem data={this.stockAppEntry} root={this.props.root} src={stockmarketimage}></PortfolioItem>






                <PortfolioItem data={this.nytAppEntry} root={this.props.root} src={nytImage}></PortfolioItem>





            </div>
        </div></div>);
    }
}