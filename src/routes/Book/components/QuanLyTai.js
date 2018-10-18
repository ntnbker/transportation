import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { RUNNING_CODE, PAUSING_CODE, STOP_CODE, WAITING_CODE, DONE_CODE  } from '../../../api/fakeData'
import './QuanLyTai.scss'
export default class QuanLyTai extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      deviceId: props.device && props.device.id
    }

    this.updateStatus = this.updateStatus.bind(this)
    this.triggerNextStop = this.triggerNextStop.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }
  updateStatus(status) {
    this.props.updateStatus(this.state.deviceId, status)
  }

  triggerNextStop() {
    this.props.triggerNextStop(this.state.deviceId)
  }

  render() {
    let { device } = this.props
    let { licensePlate, driverName, currentLocation, status, note } = device || {}
    return (
      <Row className="text-center" id="quan-ly-tai">
        <Col className="col-6">
          <h3>Xe Số: <span className="font-weight-bold">{licensePlate}</span></h3>
        </Col>
        <Col className="col-6">
          <h3>Tram Tiếp Theo: <span className="font-weight-bold">{currentLocation}</span></h3>
        </Col>
        <Col className="col-6">
          <h3>Tài Xế: <span className="font-weight-bold">{driverName}</span></h3>
        </Col>
        <Col className="col-6">
          <h3>Trạng Thái: <span className="font-weight-bold">{status}</span></h3>
        </Col>
        <Col className="col-12">
          <h3>Ghi Chú: <span className="font-weight-bold">{note}</span></h3>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status !== PAUSING_CODE} 
            onClick={() => this.updateStatus(RUNNING_CODE)}
          >
            Chạy Tiếp
          </Button>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status !== RUNNING_CODE} 
            onClick={() => this.updateStatus(PAUSING_CODE)}
          >
            Tạm Dừng
          </Button>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status === WAITING_CODE}
          >
            Tạo Sự Kiện
          </Button>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status !== WAITING_CODE} 
            onClick={() => this.updateStatus(RUNNING_CODE)}
          >
            Bắt Đầu
          </Button>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status === WAITING_CODE || status === STOP_CODE || status === DONE_CODE} 
            onClick={() => this.triggerNextStop()}
          >
            Trạm Tiếp
          </Button>
        </Col>
        <Col className="col-6 col-sm-4">
          <Button 
            disabled={status === WAITING_CODE} 
            onClick={this.props.deviceLogout}
          >
            Logout
          </Button>
        </Col>
      </Row>
    );
  }
}