import React,  {useState, useEffect} from 'react';
import './App.css';
import Table from './Table'; 
import AddressContainer from './AddressContainer';

function App() {
  const columns = ['First Name','Last Name', 'Age', 'Status'];
  
  const [data, setData] = useState([]);
  const [address, setAddress] = useState([])
  const [user, setUser] = useState("")
    
  const showAddress = (event) => {
    const customerId = event.currentTarget.dataset.key;
    fetch(`/address/${customerId}`)
    .then(results => results.json())
    .then(data => {
      setAddress(data);
      setUser(customerId);
    });
  };

  useEffect(() => {  
    fetch(`/customers`)
    .then(results => results.json())
    .then(data => {
        setData(data);
    });
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">
          <div  className="App-heading">Welcome to Customers Page</div>
          <Table columns={columns} data={data} showAddress={showAddress}/>
          <AddressContainer address={address} user={user}/>
      </div>
    </div>
  );
}

export default App;
