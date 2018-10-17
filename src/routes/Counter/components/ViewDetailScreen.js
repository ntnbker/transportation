import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ViewDetailScreen.scss'
export default class ViewDetailScreen extends React.Component {
  render() {
    return (
      <Form id="form-view-deatail">
        <Row form className="text-left">
          <Col md={6}>
            <FormGroup>
              <Label for="khach-hang">Khách Hàng</Label>
              <Input type="text" name="text" id="khach-hang" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="cong-ty">Công ty</Label>
              <Input type="text" name="text" id="cong-ty" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ngay-nhan">Ngày Nhận</Label>
              <Input type="text" name="text" id="ngay-nhan" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ngay-giao">Ngày giao</Label>
              <Input type="text" name="text" id="ngay-giao" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="tai-xe">Tài Xế</Label>
              <Input type="text" name="text" id="tai-xe" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="xe">Xe</Label>
              <Input type="text" name="text" id="xe" placeholder="" />
            </FormGroup>
          </Col>
          
          <Col md={6}>
            <FormGroup>
              <Label for="trang-thai">Trạng thái</Label>
              <Input type="text" name="text" id="trang-thai" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="vi-tri-hien-tai">Vị trí Hiện tại</Label>
              <Input type="text" name="text" id="vi-tri-hien-tai" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6} className="text-center lich-trinh">
            <Button>Xem Lich Trinh</Button>
          </Col>
          <Col md={6} className="text-center nhat-ki">
            <Button>Xem Nhat Ki</Button>
          </Col>
        </Row>
        
      </Form>
    );
  }
}