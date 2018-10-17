
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table, Button } from 'reactstrap'
import './LichTrinh.scss'
class LichTrinh extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
        <Table striped bordered id="lich-trinh">
            <thead className="bg-success">
            <tr>
                <th>Tên Trạm</th>
                <th>Nhận / Trả</th>
                <th>Trạng Thái</th>
                <th>Ghi chú</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tram 1</td>
                    <td>Nhan Hang</td>
                    <td>Xong</td>
                    <td>Nhan 20 bo ban ghe</td>
                </tr>
                <tr>
                    <td>Trạm 2</td>
                    <td>Tra Hang</td>
                    <td>Xong</td>
                    <td>Tra 15 bo ban ghe</td>
                </tr>
                <tr>
                    <td>Tram 3</td>
                    <td>Nhan Hang</td>
                    <td>Dang</td>
                    <td>Nhan 4 bo Salon</td>
                </tr>
                <tr>
                    <td>Tram 4</td>
                    <td>Tra Hang</td>
                    <td>Chua</td>
                    <td>Tra toan bo Hang</td>
                </tr>
            </tbody>
        </Table>
    )
  }
}

export default LichTrinh;