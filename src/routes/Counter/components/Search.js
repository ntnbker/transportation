import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
      <Form inline className="text-center" id="search-form">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="text" id="searchCustomer" placeholder="Khách hàng" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="date" name="date" id="sreachDay" placeholder="Ngày" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        < Input type="text" name="text" id="searchStatus" placeholder="Trạng thái" />  
        </FormGroup>
        <Button>Search</Button>
      </Form>
    );
  }
}