import React, { Component } from 'react';
import { PortfolioItem } from "./../PortfolioItem/PortfolioItem"

import stockmarketimage from "./../../assets/stockmarket.png"
import nytImage from "./../../assets/nytImage.png"
import beeImage from "./../../assets/beeIcon.png"


export class Portfolio extends Component {


    stockAppEntry = {
        title: "StockX: Practice Stock Market App",
        body: <div>
            <p>StockX is a paper trading stock market app that was the second project I worked on at
                           Bootcamp.
                           The application allows the user to create an account, deposit imaginary money, and buy
                           shares with that money.
                           We utilized MySQL in order to store the user's transactions, balance, and positions, an
                           Express + Node 
                            backend in order to process purchase orders, <a href="https://iextrading.com/developer/">
                    IEXTrading in order to get stock quotes,</a> and Bootstrap to style the frontend.
                        </p>

            <p>
                StockX was a major 2 week collaboration between 4 people. My main contribution was writing
                the routing code and the purchasing logic. 

                        </p>
        </div>,
        src : stockmarketimage,
        technologies : ["Express","NodeJS","IEXTrading","Bootstrap","MySQL"],
        herokuURL : "https://lit-thicket-39018.herokuapp.com/",
        gitURL : "https://github.com/MarkHays/stocks"
    }

    nytAppEntry = {
        title : 'NYT Article Community Recommender',
        body : <div>
                <p>
                    The NYT Community App was the final project of our bootcamp and had the most expansive requirements of the course.
                    We implemented a full MERN stack in addition to the NYT API and Passport in order to provide a comprehensive technical demonstration.

                    Main features include 
                </p>
                    <ul>    
                        <li>
                         the ability to create a user account
                        </li>
                        <li>
                         save those articles to your account
                        </li>
                        <li>
                         query for articles from the NYT API
                        </li>
                        <li>
                         make recommendations to other users if you know their user handle
                        </li>
                        <li>
                         add personal notes to the article for future reading
                        </li>



                    </ul>
                        
                        
                        
            

                <br>
                </br>

                <p>
                    The main challenge we encountered in this project was working with React, but that was also our greatest opportunity.
                    Previously, it was hard for groups to evenly delegate work, but the object oriented philosophy of React meant that 
                    each team member could focus on implementing their own feature, from frontend to backend. 
                </p>
                



        </div>,

        src : nytImage, 
        technologies :["Mongo", "Express" , "React" , "NodeJS" , "Passport" , "Bootstrap", "Axios"],
        herokuURL : "https://dry-wave-20540.herokuapp.com/",
        gitURL : "https://github.com/group1-project3/Project-3"
    }

    newbeeAppEntry = {
        title : 'Newbee Event Finder',
        body : <div> 
            <p>
             Newbee is an event finder app and our first project. Our application allows the user to search for local events like
             concerts and keep notes of them for later reference. We utilized the Seat Geeks API for event querying, the GeoIP 
             API for getting the user's location, and FireBase for storage. My main contribution was developing the geocoding functionality of our application.

            </p>
            </div>,
        src : beeImage,
        technologies :["Jquery","HTML", "CSS","Firebase","Seat Geek API", "AJAX"],
        herokuURL : "",
        gitURL : "https://github.com/Group-Project-1/Presentation"
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