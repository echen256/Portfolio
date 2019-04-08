import React, {Component} from "react";



export class Row extends Component {


    state = {
        items : []
    }

    componentDidMount(){
        this.setState({items: this.props.items})
    }

    render(){
        return (<div className = "rowContainer">
                {this.state.items.map((item) => <div className = "rowItem">{item}</div>
                
                )}



        </div>);
    }
}