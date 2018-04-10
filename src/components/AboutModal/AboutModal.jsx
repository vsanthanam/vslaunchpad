// @flow

import * as React from 'react';
import Modal from 'react-modal';

import './AboutModal.less';

type AboutModalProps = {

  showModal: boolean,
  onRequestClose: (event: Event) => void

}

class AboutModal extends React.Component<AboutModalProps> {

  render() {

    return(

      <Modal className="about-content-modal" isOpen={this.props.showModal} onRequestClose={this.props.onRequestClose} shouldFocusAfterRender={false} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} ariaHideApp={false}>
        <div className="about-content-container">
          <br />
          <h2>{"vslaunchpad"}</h2>
          <p>This app was written in <a href="https://reactjs.org">React.js</a> and bootstrapped with <a href="https://github.com/facebook/create-react-app">create-react-app</a>. Additional CRA scripts from <a href="https://github.com/kitze/custom-react-scripts">custom-react-scripts</a>. CSS preprocessing with <a href="http://lesscss.org">less.js</a>. Hosted on <a href="https://firebase.google.com">firebase</a>. JavaScript static type checking with <a href="https:www.flow.org">flow</a>.</p>
          <p>Additional iconography by Freepik, Good Ware, Dave Gandy from <a href="https://www.flaticon.com">flaticon.com</a></p>
          <button onClick={this.props.onRequestClose}>CLOSE</button>
        </div>
      </Modal>

    );

  }

}

export default AboutModal;
