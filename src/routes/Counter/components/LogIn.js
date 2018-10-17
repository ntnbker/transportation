import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LogIn.scss'
export default class LogIn extends React.Component {
  render() {
    return (
      <Form id="log-in">
        <FormGroup>
            <Label for="ma-nhan-vien">Mã Số Nhân Viên</Label>
            <Input type="text" name="text" id="ma-nhan-vien" placeholder="" />
        </FormGroup>
        <FormGroup>
            <Label for="xe-login">Xe</Label>
            <Input type="text" name="text" id="xe-login" placeholder="" />
        </FormGroup>
        <Button>Đăng Nhập</Button>
      </Form>
    );
  }
}