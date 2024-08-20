"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
        setItems(response.data);
      } catch (error) {
        console.error('Terjadi Kesalahan Saat Fetch Data: ', error);
      }
    };

    fetchListItems();
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {selectedItem ? (
        <DetailView item={selectedItem} onBack={handleBack} />
      ) : (
        <div>
          <h1 style={{fontWeight: 'bold', fontSize: '30px', margin: '20px'}}>Daftar List Nama</h1>
            {items.map((item) => (
              <li style={{fontWeight: 'bold', marginLeft: '20px'}} key={item.id} onClick={() => handleClick(item)}>
                {item.name}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};

const DetailView = ({item, onBack}) => {
  return (
    <div>
      <button onClick= {onBack} style={{margin: '10px', color: 'blue', textDecorationLine: 'underline'}}>Back to list</button>
      <h1 style={{fontWeight: 'bold'}}>Nama     : {item.name}</h1>
      <h1 style={{fontWeight: 'bold'}}>Email    : {item.email}</h1>
      <h1 style={{fontWeight: 'bold'}}>Phone    : {item.phone}</h1>
      <h1 style={{fontWeight: 'bold'}}>Company  : {item.company.name}</h1>
      <h1 style={{fontWeight: 'bold'}}>Address  : {item.address.city}</h1>
    </div>
  );
};
export default ListPage;
