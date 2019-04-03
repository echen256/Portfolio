import React, { Component } from "react";
import git_pic from "./../../assets/icons/git_pic.png";
import heroku_pic from "./../../assets/icons/heroku_pic.png";

export class Modal extends Component {
  closeModal() {
    this.props.root.setState({
      modalVisible: false
    });
  }

  data = "";

  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.data = this.props.root.state;
  }

  render() {
    return (
  
          <div  className="modal">
            <div className="modal-content">
              <div className="modal-header">

                {this.data.modalTitle}
                <span className="close" onClick={this.closeModal}>
                  X
                </span>

              </div>

              <div className="modal-body">
                <img width = '200px' height = "200px"
                  alt="null"
                  className="margin-20px"
                  src={this.data.modalImage}
                />
                <div className="margin-20px">{this.data.modalBody}</div>
              </div>

              <div className="m-footer">
                <div>
                  <div className="thin-dark-border-bottom">Links</div>
                  <div>
                    <a href={this.data.modalHerokuUrl}>
                      <img alt="null" className="linkIcon" src={heroku_pic} />
                    </a>
                    <a href={this.data.modalGitUrl}>
                      <img alt=" null" className="linkIcon" src={git_pic} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    );
  }
}
