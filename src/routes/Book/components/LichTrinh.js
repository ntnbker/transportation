
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table } from 'reactstrap'
import Modal from '../../../components/modal'
import './LichTrinh.scss'

class LichTrinh extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props
    return (
      <Modal
        buttonLabel="Xem Lịch Trình"
        modalTitle="Lịch Trình"
        className="modal-lg"
        hideFooterButton
      >
        <Table striped bordered id="lich-trinh">
          <thead className="bg-success">
            <tr>
              <th>Tên Trạm</th>
              <th>Loại</th>
              <th>Trạng Thái</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, key) => (
              <tr key={key}>
                <td>{route.name}</td>
                <td className="text-capitalize">{route.type.replace(/_/g, ' ')}</td>
                <td>{route.status}</td>
                <td>{route.note}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal>)
  }
}

export default LichTrinh;