import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LogIn.scss'
export default class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mssv: '',
      msx: ''
    }
    this.login = this.login.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  changeInput({ target: { value, id }}) {
    this.setState({ err: '', [id]: value })
  }

  login(e) {
    e.preventDefault()
    const { msnv, msx } = this.state
    const self = this
    this.props.deviceLogin({ msnv, msx }).catch(err => self.setState({ err }))
  }

  render() {
    const { err } = this.state
    return (
      <Form id="log-in" onSubmit={this.login}>
        <FormGroup>
            <Label for="msnv">Mã Số Nhân Viên</Label>
            <Input type="text" onChange={this.changeInput} name="text" id="msnv" placeholder="T0001, T0002, T0003, T0004" />
        </FormGroup>
        <FormGroup>
            <Label for="msx">Xe</Label>
            <Input type="text" onChange={this.changeInput} name="text" id="msx" placeholder="X0001, X0002, X0003, X0004" />
        </FormGroup>
        {err && <p className="text-danger">{err}</p> }
        <Button>Đăng Nhập</Button>
      </Form>
    );
  }
}