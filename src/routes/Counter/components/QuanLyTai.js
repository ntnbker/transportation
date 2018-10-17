import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import './QuanLyTai.scss'
export default class QuanLyTai extends React.Component {
  render() {
    return (
        <Row className="text-center" id="quan-ly-tai">
            <Col className="col-12">
                <h3>Xe <span>XXXXX</span></h3>
                <h3>Tai Xe <span>Nguyen Van A</span></h3>
                <h3>Tram Hien Tai: <span>Tram 2</span></h3>
                <h3>Tram Tiep Theo: <span>Tram 3</span></h3>
            </Col>
            <Col className="col-6 col-sm-4"><Button>Chay Tiep</Button></Col>
            <Col className="col-6 col-sm-4"><Button>Tam Dung</Button></Col>
            <Col className="col-6 col-sm-4"><Button>Tao Su Kien</Button></Col>
            <Col className="col-6 col-sm-4"><Button>Bat Dau</Button></Col>
            <Col className="col-6 col-sm-4"><Button>Tram Tiep Theo</Button></Col>
            <Col className="col-6 col-sm-4"><Button>Ket Thuc</Button></Col>
        </Row>
    );
  }
}