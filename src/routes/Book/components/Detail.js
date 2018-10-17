import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Detail extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleSelect" sm={12}>Khách hàng</Label>
          <Col sm={8}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Võ Duy Cận</option>
              <option>Nguyễn trọng Nhân</option>
              <option>Lê tuấn Khang</option>
              <option>Nguyễn minh tiến</option>
              <option>Đặng văn tâm</option>
            </Input>
          </Col>
          <Col sm={4} className="text-right">
            <Button className='btn btn-primary' color="warning">Creat New</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="startPoit" sm={12}>Điểm đầu</Label>
          <Col sm={12}>
            <Input type="text" name="text" id="startPoit" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="endPoit" sm={12}>Điểm cuối</Label>
          <Col sm={12}>
            <Input type="text" name="text" id="endPoit" placeholder="" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="time-date" sm={12}>Thời gian</Label>
          <Col sm={6}>
            <Input type="time" name="time" id="time-day" placeholder="" />
          </Col>
          <Col sm={6}>
            <Input type="date" name="date" id="exampleDate" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={6}>Điểm nhận giữa chuyến</Label>
          <Col sm={6}>
            <Button className='btn btn-primary' color="warning">Add New</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={6}>Điểm trả giữa chuyến</Label>
          <Col sm={6}>
            <Button className='btn btn-primary' color="warning">Add New</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="note" sm={12}>Ghi chú</Label>
          <Col sm={12}>
            <Input type="text" name="text" id="note" placeholder="" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}