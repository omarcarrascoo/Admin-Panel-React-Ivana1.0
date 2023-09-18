


import React, { useState } from 'react';
import './updateForm.css'
const UpdateForm = ({ onUpdate }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [altText, setAltText] = useState('');

  const handleImageChange = (event) => {
    setSelectedImages([...event.target.files]);
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append('images', selectedImages[i]);
    }
    formData.append('altText', altText);

    onUpdate(formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className='blackC'>Add Images</h1>
      <input className='blackC' type="file" name="images" onChange={handleImageChange} multiple/>
      {/* <p>Alt Text</p>
      <input
        placeholder="Alternate Text"
        type="text"
        name="altText"
        value={altText}
        onChange={handleAltTextChange}
      /> */}
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
