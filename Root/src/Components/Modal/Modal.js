import React, { Component } from "react";


export class Modal extends Component {



    render() {
        return (<div>
            <div className="modalContainer">

                <div id="stockmarketModal" className="modal">
                    <div className="modal-content">

                        <div className="modal-header">
                            StockX: Pratical Pratice Stock Market App
                <span className="close">X</span>
                        </div>

                        <div className="modal-body">
                            <img alt="null" className="margin-20px" src="assets/stockmarket.png">
                            </img>
                            <div className="margin-20px">

                                <p>StockX is a paper trading stock market app that was the second project I worked on at
                                    Bootcamp.
                                    The application allows the user to create an account, deposit imaginary money, and buy
                                    shares with that money.
                                    We utilized MySQL in order to store the user's transactions, balance, and positions, an
                                    Express
                        backend in order to process purchase orders, <a href="https://iextrading.com/developer/">
                                        IEXTrading in order to get stock quotes,</a> and Bootstrap to style the frontend.
                    </p>
                                <br />
                                <p>
                                    StockX was a major 2 week collaboration between 4 people. My main contribution was writing
                                    the routing code and the purchasing logic.
            
                    </p>
                            </div>

                        </div>

                        <div className="m-footer">
                            <div >
                                <div className="thin-dark-border-bottom">
                                    Links
                    </div>
                                <div>
                                    <a href="https://github.com/MarkHays/stocks">
                                        <img alt="null" className="linkIcon" src="./assets/heroku.png">
                                        </img>
                                    </a>
                                    <a href="https://github.com/MarkHays/stocks">
                                        <img alt=" null" className="linkIcon" src="./assets/git-cat.png">
                                        </img>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>);
    }
}