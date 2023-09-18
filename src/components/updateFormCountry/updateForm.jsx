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
      <h1>Add Country</h1>
      <p>Status</p>
      <select name="status" id="status">
        <option value="true">Active</option>
        <option value="false">Unactive</option>
      </select>
      <p>Lenguage</p>
      <input
        placeholder='en/es'
        type="text"
        name="lenguage"
        value={formData.lenguage}
        onChange={handleChange}
      />
      <p>Country Name</p>
      <input
        placeholder='Nombre del pais: ej.México'
        type="text"
        name="countryName"
        onChange={handleChange}
        value={formData.countryName}
      />
      <p>metadescription</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metadescription"
        onChange={handleChange}
        cols="30" rows="10"
        value={formData.metadescription}
      ></textarea>
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>Title-tag</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        onChange={handleChange}
        value= {formData.titleTag}
      />
      <p>Wikipedia Flag Link</p>
      <input
        placeholder = "Wikipedia Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
        type="text"
        name="imgRoute"
        onChange={handleChange}
        value={formData.imgRoute}
      />
      <p>URL COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="urlCountry"
        onChange={handleChange}
        value={formData.urlCountry}
      />
      <p>h1</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
        value={formData.h1}
      />
      <p>h2</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
        value={formData.h2}
      />
      <p>Descripcion Larga</p>
      <textarea
        placeholder='Descripcion del pais'
        name="p"
        onChange={handleChange}
        value={formData.p}
      ></textarea>
      <button type="submit">Update</button>
    </form>
    );
  }else{
    return (
      <form className='form' onSubmit={handleSubmit}>
        <h1>Add Country</h1>
        <p>Status</p>
        <select name="status" id="status">
          <option value="true">Active</option>
          <option value="false">Unactive</option>
        </select>
        <p>Lenguage</p>
        <input
          placeholder='en/es'
          type="text"
          name="lenguage"
          onChange={handleChange}
        />
        <p>Country Name</p>
        <input
          placeholder='Nombre del pais: ej.México'
          type="text"
          name="countryName"
          onChange={handleChange}
        />
        <p>metadescription</p>
        <textarea
          placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
          type="text"
          name="metadescription"
          onChange={handleChange}
          cols="30" rows="10"
        ></textarea>
        <p>keywords</p>
        <input
          type="text"
          name="keyWords"
          placeholder='word1, word2, word3 ...'
          onChange={handleChange}
        />
        <p>Title-tag</p>
        <input
          placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
          type="text"
          name="titleTag"
          onChange={handleChange}
        />
        <p>Wikipedia Flag Link</p>
        <input
          placeholder = "Wikipedia Link ej. httpss://w7.pngwing.com/pngs/56/96/png-transparent-flag-of-mexico-flag-of-mexico-united-states-mexican-war-of-independence-mexican-flag-s-free-flag-text-logo.png"
          type="text"
          name="imgRoute"
          onChange={handleChange}
        />
        <p>URL COUNTRY</p>
        <input
          placeholder='ej. mexico'
          type="text"
          name="urlCountry"
          onChange={handleChange}
        />
        <p>h1</p>
        <input
          placeholder='Encabezado de la página 70 - 80 characters máximo'
          type="text"
          name="h1"
          onChange={handleChange}
        />
        <p>h2</p>
        <input
          placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
          type="text"
          name="h2"
          onChange={handleChange}
        />
        <p>Descripcion Larga</p>
        <textarea
          placeholder='Descripcion del pais'
          name="p"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
};

export default UpdateForm;

