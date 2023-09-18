
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import UpdateForm from '../../components/updateFormCountry/updateForm';
import './countryUpdate.css';
import axios from 'axios';

const UpdateImageevent = () => {
    const history = useHistory();
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://ivanatovillaart.com/api/events/${id}`);
      const data = await response.json();
      
      setData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  console.log(data);
  const updateData = async (updatedData) => {
    try {
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
      const response = await axios.put(`https://ivanatovillaart.com/api/propertyImage/uploadEvent/${id}`, updatedData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `Bearer ${TOKEN}`,
        },
      });
      
      history.push('/panel/events');
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };
  

  return (
    <div className='country__update'>
        
      {data ? (
        <UpdateForm data={data} onUpdate={updateData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UpdateImage;
