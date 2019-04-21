import React, { Component } from "react";
import git_pic from "./../../assets/icons/git_pic.png";
import heroku_pic from "./../../assets/icons/heroku_pic.png";

export class Modal extends Component {
  closeModal() {
    this.props.root.setState({
      modalVisible: false
    });
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  }

  data = "";

  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.data = this.props.root.state.data;
  }

  render() {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header"  onClick={this.closeModal}>
            {this.data.title}
            <span style = {{float:"right"}}>X</span>
          </div>

          <div className="modal-body">
            <div className = "column">

              <img
                alt="null"
                className="modal-image"
                src={this.data.src}
              />

              <div >
                <div style = {{paddingTop:'5px'}}> Technologies Used</div>
                <ul>
                  {this.data.technologies.map( item => <li>{item}</li>)}
                </ul>
              </div>

              <div className="modal-footer">
                <div>
                  <div className="thin-dark-border-bottom">Links</div>
                  <div>

                    {this.data.herokuURL === "" ? <div/>: <a href={this.data.herokuURL}>
                      <img alt="null" className="linkIcon" src={heroku_pic} />
                    </a>}
                    
                    <a href={this.data.gitURL}>
                      <img alt=" null" className="linkIcon" src={git_pic} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-text column">{this.data.body}</div>
          </div>
        </div>
      </div>
    );
  }
}
