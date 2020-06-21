import React from 'react';
import './AddressContainer.css';

const AddressContainer = (props) => {
     const {address, user} = props;
     return (<div className="Address-container">
        {(user !== "" && address.length === 0)? "No address added" : 
            address.map((row, i) => {
                return (
                    <div key={`address-${i}`} className="Address-rows">{row.address}</div>
                )
            })
        }
     </div>
    )
};
export default AddressContainer;   