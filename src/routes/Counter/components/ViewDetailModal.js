/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import Modal from '../../../components/modal';
import Detail from './Detail';
class ViewDetailModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Modal 
            buttonLabel="View"
            modalTitle="Details"
            submitText="Edit"
            cancelText="Done"
        >
            <div className="mx-auto"><Detail /></div>
        </Modal>
    );
  }
}

export default ViewDetailModal;