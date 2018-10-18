
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table, Button } from 'reactstrap'
import ViewModal from './ViewDetailModal'
import './BookList.scss'

import ViewDetailScreen from './ViewDetailScreen'

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList()
  }

  componentWillReceiveProps(props) {
    if (props.justUpdated) {
      setTimeout(() => props.removeHighlight(props.justUpdated), 1500)
    }
  }

  render() {
    const { list, justUpdated } = this.props
    let updatedId = (justUpdated || '').replace(/\-.*/, '')
    console.log(updatedId)
    return (

      <Table striped bordered id="book-list">
        <thead className="bg-success">
          <tr>
            <th>Khách Hàng</th>
            <th>Số Xe</th>
            <th>Thời Gian</th>
            <th>Trạng Thái</th>
            <th>Trạm Tiếp Theo</th>
            <th>Chi Tiết</th>
            {/* <th>Chỉnh sửa / Xóa</th> */}
          </tr>
        </thead>
        <tbody>
          {list.map((bookItem, key) => (
            <tr key={key} className={updatedId == bookItem.id ? 'bg-primary' : ''}>
              <th scope="row">{bookItem.customerName}</th>
              <td>{bookItem.licensePlate}</td>
              <td>{bookItem.executeTime}</td>
              <td>{bookItem.status}</td>
              <td>{bookItem.currentLocation}</td>
              <td>
                <ViewModal {...this.props} bookItem={bookItem} />
              </td>
              {/* <td>
                <Button className='btn btn-primary' color="warning">Edit</Button>&nbsp;
                <Button className='btn btn-primary' color="danger">Remove</Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default BookList;