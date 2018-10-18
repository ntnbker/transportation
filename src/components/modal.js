/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { hideFooterButton } = this.props
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle || 'Modal title'}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
          {!hideFooterButton &&
            <ModalFooter>
              <Button color="primary" onClick={this.props.submit}>{this.props.submitText || 'Do Something'}</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>{this.props.cancelText || 'Close'}</Button>
            </ModalFooter>
          }
        </Modal>
      </div>
    );
  }
}

export default ModalExample;