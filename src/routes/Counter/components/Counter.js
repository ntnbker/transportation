import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'reactstrap';
import Modal from './modal';



export const Counter = ({ counter, increment, doubleAsync }) => (
  
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button className='btn btn-primary' onClick={increment}>
      Increment
    </Button>
    {' '}
    <Button className='btn btn-secondary mx-4' onClick={doubleAsync}>
      Double (Async)
    </Button>

    <Modal buttonLabel="View"/>

    <Table striped bordered>
        <thead className="bg-success">
          <tr>
            <th>Khách Hàng</th>
            <th>Thời Gian</th>
            <th>Trạng Thái</th>
            <th>Chi Tiết</th>
            <th>Chỉnh sửa / Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">Khách hàng1</th>
            <td>14-12-2018</td>
            <td>Chờ báo giá</td>
            <td><Button className='btn btn-primary' color="info" onClick={increment}>View</Button></td>
            <td>
              <Button className='btn btn-primary' color="warning" onClick={increment}>Edit</Button>&nbsp;
              <Button className='btn btn-primary' color="danger" onClick={increment}>Remove</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Otto</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr className="table-success">
            <th scope="row">3</th>
            <td>@mdo</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Otto</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter

