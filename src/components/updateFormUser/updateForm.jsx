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

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Update User</h1>
      <p>Email</p>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <p>Last Name</p>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <p>Admin</p>
      <input
        type="text"
        name="isAdmin"
        value={formData.isAdmin}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;

