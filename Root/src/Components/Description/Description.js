import React, {Component} from "react";


export class Description extends Component {


    render () {
        return (<div>
             <div className="content-dark">
            <div className="description margin">
                <div className="descriptionHeader whiteBorder">
                    About Me
                </div>
    
                <div className = "descriptionText">
                <p>
                Hi! My name is Eric Chen and I am an aspiring web developer. I have recently graduated from the UC
                    Berekely
                    Online Bootcamp, which you can find here.
                    Below are the three main projects we worked on in class. Click on the image to find out more!
                </p>
                    <br/>
                    

                    I also come from a biotechnology background and have been working at an Immunohistonechemistry laboratory for the past year. If you are looking
                    for someone who can work with both fields, I am your guy!
                    
                </div>
            </div>
        </div>
        </div>);
    }


}