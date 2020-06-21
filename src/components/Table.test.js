import React from 'react';
import Table from './Table';
import { 
  fireEvent, 
  render 
} from "@testing-library/react";

it("Captures link clicks in Table", done => {
  const columns = ['First Name','Last Name', 'Age', 'Status'];

  const data = [{
      "id": 1,
      "customer_id": 1,
      "address": "Balaji Appartment,\r\nBangalore\r\nPin: 560077 ",
      "status": 1
    }];

  const showAddress = ()=>{
      done();
  }  

  const { getByText } = render(<Table columns={columns} data={data} showAddress={showAddress} />);
  const linkElement = getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
  const node1 = getByText("Show Address");
  fireEvent.click(node1);
});
