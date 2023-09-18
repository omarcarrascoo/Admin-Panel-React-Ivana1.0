import React, { useState } from 'react';
import './updateForm.css'
const UpdateForm = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  if (data) {
    return (
      <form className='form' onSubmit={handleSubmit}>
      <h1>Update Property</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Title</p>
      <input
        placeholder='Solo para descripcion interna'
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>Size</p>
      <input
        placeholder = "14 x 24 CM"
        type="text"
        name="size"
        value={formData.size}
        onChange={handleChange}
      />
      <p>Description</p>
      <textarea
        placeholder='Description of the product'
        name="desc"
        onChange={handleChange}
        value={formData.desc}
      ></textarea>
      <p>Price</p>
      <input
        
        type="number"
        name="price"
        onChange={handleChange}
        value={formData.price}
      />
      <p>Author</p>
      <input
        
        type="text"
        name="author"
        onChange={handleChange}
        value={formData.author}
      />
      <p>Categories</p>
      <input
        type="text"
        name="categories"
        onChange={handleChange}
        value={formData.categories}
      />
      <button type="submit">Update</button>
    </form>
    );
  } else {
    return (
      <form className='form' onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Title</p>
      <input
        placeholder='Title of the product'
        type="text"
        name="title"
        onChange={handleChange}
      />
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
      />
      <p>Size</p>
      <input
        placeholder = "14 x 24 CM"
        type="text"
        name="size"
        
        onChange={handleChange}
      />
      <p>Description</p>
      <textarea
        placeholder='Description of the product'
        name="desc"
        onChange={handleChange}
        
      ></textarea>
      <p>Price</p>
      <input
        placeholder='1276.50'
        type="number"
        name="price"
        onChange={handleChange}
        
      />
      <p>Author</p>
      <input
        placeholder='Name of the author'
        type="text"
        name="author"
        onChange={handleChange}
        
      />
      <p>Categories</p>
      <input
        placeholder='oleo, realism, custom comision...'
        type="text"
        name="categories"
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
    );
  }
};

export default UpdateForm;

