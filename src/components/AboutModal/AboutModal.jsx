import React, { Component } from 'react';
import Modal from 'react-modal';

import './AboutModal.less';

class AboutModal extends Component {

  render() {

    return(

      <Modal className="about-content-modal" isOpen={this.props.showModal} onRequestClose={this.props.onRequestClose} shouldFocusAfterRender={false} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}>
        <AboutContent handleClose={this.props.onRequestClose}/>
      </Modal>

    );

  }

}

class AboutContent extends Component {

  render() {

    return(

      <div className="about-content-container">
        <br />
        <h2>{"vslaunchpad"}</h2>
        <p>This app was written in <a href="https://reactjs.org">React.js</a> and bootstrapped with <a href="https://github.com/facebook/create-react-app">create-react-app</a>. Additional CRA scripts from <a href="https://github.com/kitze/custom-react-scripts">custom-react-scripts</a>. CSS preprocessing with <a href="http://lesscss.org">less.js</a>. Hosted on <a href="https://surge.sh">surge.sh</a>.</p>
        <p>Additional iconography by Freepik, Good Ware, Dave Gandy from <a href="https://www.flaticon.com">flaticon.com</a></p>
        <button onClick={this.props.handleClose}>CLOSE</button>
      </div>

    );

  }

}

export default AboutModal;
