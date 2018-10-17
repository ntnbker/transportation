/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import Modal from '../../../components/modal'
import ViewDetailScreen from './ViewDetailScreen'

class ViewDetailModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        buttonLabel="View"
        modalTitle="Details"
        className="modal-lg"
        hideFooterButton
      >
        <div className="mx-auto"><ViewDetailScreen {...this.props} /></div>
      </Modal>
    );
  }
}

export default ViewDetailModal