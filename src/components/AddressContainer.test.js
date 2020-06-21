import React from 'react';
import { render } from '@testing-library/react';
import AddressContainer from './AddressContainer';

test('renders learn react link', () => {
  const address = [{
    "id": 1,
    "customer_id": 1,
    "address": "Balaji Appartment,\r\nBangalore\r\nPin: 560077 ",
    "status": 1
  }]
  const user = 1;
  const { getByText } = render(<AddressContainer address={address} user={user} />);
  const linkElement = getByText(/Balaji Appartment/i);
  expect(linkElement).toBeInTheDocument();
});
