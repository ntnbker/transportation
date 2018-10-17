
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table, Button } from 'reactstrap'
import ViewModal from './ViewDetailModal'
class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
        <Table striped bordered>
            <thead className="bg-success">
            <tr>
                <th>Khách Hàng</th>
                <th>Thời Gian</th>
                <th>Trạng Thái</th>
                <th>Vị trí hiện tại</th>
                <th>Chi Tiết</th>
                <th>Chỉnh sửa / Xóa</th>
            </tr>
            </thead>
            <tbody>
                <tr className="table-success">
                    <th scope="row">Võ Duy cận</th>
                    <td>14-12-2018</td>
                    <td>Chờ báo giá</td>
                    <td>Vị trí 1</td>
                    <td><ViewModal /></td>
                    <td>
                        <Button className='btn btn-primary' color="warning">Edit</Button>&nbsp;
                        <Button className='btn btn-primary' color="danger">Remove</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Nguyễn trọng nhân</th>
                    <td>15-12-2018</td>
                    <td>Chờ báo giá</td>
                    <td>Vị trí 2</td>
                    <td><ViewModal /></td>
                    <td>
                        <Button className='btn btn-primary' color="warning">Edit</Button>&nbsp;
                        <Button className='btn btn-primary' color="danger">Remove</Button>
                    </td>
                </tr>
                <tr className="table-success">
                    <th scope="row">3</th>
                    <td>@mdo</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td><ViewModal /></td>
                    <td>
                        <Button className='btn btn-primary' color="warning">Edit</Button>&nbsp;
                        <Button className='btn btn-primary' color="danger">Remove</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Otto</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><ViewModal /></td>
                    <td>
                        <Button className='btn btn-primary' color="warning">Edit</Button>&nbsp;
                        <Button className='btn btn-primary' color="danger">Remove</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
  }
}

export default BookList;