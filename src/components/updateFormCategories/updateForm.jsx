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
      <h1>Update Event</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Exhibition Title</p>
      <input
        placeholder = "Name of the event..."
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <p>Gallery</p>
      <input
        placeholder = "Name of the event..."
        type="text"
        name="gallery"
        value={formData.gallery}
        onChange={handleChange}
      />
      <p>Description</p>
      <input
        placeholder='About the event...'
        type="text"
        name="desc"
        onChange={handleChange}
        value={formData.desc}
      />
      <p>Date</p>
      <input
        placeholder='Ej: May 23, 2023'
        type="text"
        name="date"
        onChange={handleChange}
        value={formData.date}
      />
      <p>Location</p>
      <textarea
        placeholder='Ej. Museo Real de Ontario, 100 Queens Park, Toronto, ON M5S 2C6 '
        name="direction"
        onChange={handleChange}
        value={formData.direction}
      ></textarea>
      <p>Piece Within Exhibit</p>
      <input
        placeholder='Sacrificial Object: White, Lace, Dress.” 22 x 30 inches (55.8 x 76.2 cm) '
        type="text"
        name="exibitArt"
        onChange={handleChange}
        value={formData.exibitArt}
      />
      <p>Exhibition Link</p>
      <input
        placeholder='https://www.mica.edu/galleries/fox-2-gallery/'
        type="text"
        name="exibitLink"
        onChange={handleChange}
        value={formData.exibitLink}
      />
      <button type="submit">Update</button>
    </form>
    );
  } else {
    return (
      <form className='form' onSubmit={handleSubmit}>
      <h1>Add Event</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Exhibition Title</p>
      <input
        placeholder = "Name of the event..."
        type="text"
        name="title"
        onChange={handleChange}
      />
      <p>Gallery</p>
      <input
        placeholder = "FOX 2 Gallery at Maryland Institute College of Art (MICA)"
        type="text"
        name="gallery"
        onChange={handleChange}
      />
      <p>Description</p>
      <input
        placeholder='About the event...'
        type="text"
        name="desc"
        onChange={handleChange}
      />
      <p>Date</p>
      <input
        placeholder='Ej: May 23, 2023'
        type="text"
        name="date"
        onChange={handleChange}
      />
      <p>Location</p>
      <textarea
        placeholder='Ej. Museo Real de Ontario, 100 Queens Park, Toronto, ON M5S 2C6 '
        name="direction"
        onChange={handleChange}
      ></textarea>
      <p>Piece Within Exhibit</p>
      <input
        placeholder='Sacrificial Object: White, Lace, Dress.” 22 x 30 inches (55.8 x 76.2 cm) '
        type="text"
        name="exibitArt"
        onChange={handleChange}
      />
      <p>Exhibition Link</p>
      <input
        placeholder='https://www.mica.edu/galleries/fox-2-gallery/'
        type="text"
        name="exibitLink"
        onChange={handleChange}
      />
      <button type="submit">Add Event</button>
    </form>
    );
  }
};

export default UpdateForm;

