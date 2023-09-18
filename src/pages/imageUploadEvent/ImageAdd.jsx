
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateForm from '../../components/imageUploader/imageUploader';
import ImageVisualizer from './imageVisualizer';
import './ImageUpdate.css';

const AddImageEvent = () => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://ivanatovillaart.com/api/events/find/${id}`);
      const data = await response.json();
      setData(data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const updateData = async (formData) => {
    try {
      setLoading(true); // Set loading to true before updating data

      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';

      const response = await axios.post(
        `https://ivanatovillaart.com/api/productImage/uploadEvent/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            token: `Bearer ${TOKEN}`,
          },
        }
      );

      history.push('/panel/events');
    } catch (error) {
      console.log('Error updating data:', error);
    } finally {
      setLoading(false); // Set loading to false after updating data
    }
  };

  const images = data;
  console.log(images);

  return (
    <div className="country__updates">
      <UpdateForm onUpdate={updateData} />
      {loading ? (
        <div>Loading...</div> // Render loading animation while loading is true
      ) : (
        <ImageVisualizer images={images} />
      )}
    </div>
  );
};

export default AddImageEvent;
