import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ViewDetailScreen.scss'
import LichTrinh from './LichTrinh'

export default class ViewDetailScreen extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.bookItem.id)
  }
  render() {
    let { viewItem } = this.props
    let { 
      customerName, companyName, scheduleDate, executeTime, driverName, licensePlate, status, currentLocation, routes 
    } = viewItem || {}

    return (
      <Form id="form-view-deatail">
        <Row form className="text-left">
          <Col md={6}>
            <FormGroup>
              <Label for="khach-hang">Khách Hàng</Label>
              <Input type="text" disabled name="khach-hang" value={customerName}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cong-ty">Công ty</Label>
              <Input type="text" disabled name="cong-ty" value={companyName}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ngay-nhan">Ngày Nhận</Label>
              <Input type="text" disabled name="ngay-nhan" value={executeTime}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ngay-giao">Ngày giao</Label>
              <Input type="text" disabled name="ngay-giao" value={scheduleDate}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="tai-xe">Tài Xế</Label>
              <Input type="text" disabled name="tai-xe" value={driverName}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="xe">Xe</Label>
              <Input type="text" disabled name="xe" value={licensePlate}/>
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="trang-thai">Trạng thái</Label>
              <Input type="text" disabled name="trang-thai" value={status}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="vi-tri-hien-tai">Vị trí Hiện tại</Label>
              <Input type="text" disabled name="vi-tri-hien-tai" value={currentLocation}/>
            </FormGroup>
          </Col>
          <Col md={6} className="text-center lich-trinh">
            <LichTrinh {...this.props} routes={routes || []} />
          </Col>
          <Col md={6} className="text-center nhat-ki">
            <Button>Xem Nhat Ki</Button>
          </Col>
        </Row>

      </Form>
    );
  }
}