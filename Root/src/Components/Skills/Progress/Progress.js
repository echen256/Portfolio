import React, { Component } from "react";
import {Row} from "./../../Row/Row";
import { Z_BLOCK } from "zlib";

export class Progress extends Component {
    
    borderRadius = "3px";
    progressColor = "#0f52ba";
    fill = this.props.value + "%";
    empty = (100 - this.props.value) + "%"
    left = {
        width: this.fill,
        backgroundColor: this.progressColor,
        borderTopLeftRadius: this.borderRadius,
        borderBottomLeftRadius: this.borderRadius,
        color: this.progressColor
    }


    right = {
        width: this.empty,
        backgroundColor: "white",
        borderTopRightRadius : this.borderRadius,
        borderBottomRightRadius : this.borderRadius
    }

    

    render() {
        return (
                <div className = 'rowContainer'>
                    <div style = {this.left}>
                        .
                    </div>
                    <div style = {this.right}>
                       
                    </div>
                
                </div>

        );
    }
}
