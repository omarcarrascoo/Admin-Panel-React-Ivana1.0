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
      <h1>Add City</h1>
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
      <p>City Name</p>
      <input
        placeholder='Nombre del pais: ej. San Luis Potosi'
        type="text"
        name="provinceName"
        onChange={handleChange}
        value={formData.provinceName}
      />
      <p>metadescription</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metaDescription"
        onChange={handleChange}
        cols="30" rows="10"
        value={formData.metaDescription}
      ></textarea>
      <p>keywords</p>
      <input
        type="text"
        name="keyWords"
        placeholder='word1, word2, word3 ...'
        onChange={handleChange}
        value={formData.keyWords}
      />
      <p>Title-tag - Titulo que aparece en la pestaña del explorador de 50 to 60 characters</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        value={formData.titleTag}
        onChange={handleChange}
      />
      <p>URL CITY</p>
      <input
        placeholder='ej. queretaro'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        value={formData.urlProvince}
      />
      <p>URL ORIGIN COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="country"
        onChange={handleChange}
        value={formData.country}
      />
      <p>h1 - Encabezado de la página 70 - 80 characters máximo'</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
        value={formData.h1}
      />
      <p>h2 - Soporte para el Encabezado de la página 80 - 90 characters máximo </p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
        value={formData.h2}
      />
      <p>Descripcion Larga</p>
      <textarea
        placeholder='Descripcion de la provincia'
        name="p"
        onChange={handleChange}
        value={formData.p}
      ></textarea>
      <button type="submit">Update</button>
    </form>
    );
  } else {
    return (
      <form className='form' onSubmit={handleSubmit}>
      <h1>Add City</h1>
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
      <p>City Name</p>
      <input
        placeholder='Nombre del pais: ej. San Luis Potosi'
        type="text"
        name="provinceName"
        onChange={handleChange}
      />
      <p>metadescription</p>
      <textarea
        placeholder='Texto descriptivo para buscadores de 150 a 160 characters'
        type="text"
        name="metaDescription"
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
      <p>Title-tag - Titulo que aparece en la pestaña del explorador de 50 to 60 characters</p>
      <input
        placeholder = "Titulo que aparece en la pestaña del explorador de 50 to 60 characters"
        type="text"
        name="titleTag"
        onChange={handleChange}
      />
      <p>URL CITY</p>
      <input
        placeholder='ej. san-luis-potosi'
        type="text"
        name="urlProvince"
        onChange={handleChange}
      />
      <p>URL ORIGIN COUNTRY</p>
      <input
        placeholder='ej. mexico'
        type="text"
        name="country"
        onChange={handleChange}
      />
      <p>h1 - Encabezado de la página 70 - 80 characters máximo</p>
      <input
        placeholder='Encabezado de la página 70 - 80 characters máximo'
        type="text"
        name="h1"
        onChange={handleChange}
      />
      <p>h2 - Soporte para el Encabezado de la página 80 - 90 characters máximo</p>
      <input
        placeholder='Soporte para el Encabezado de la página 80 - 90 characters máximo'
        type="text"
        name="h2"
        onChange={handleChange}
      />
      <p>Descripcion Larga</p>
      <textarea
        placeholder='Descripcion del estado'
        name="p"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Add</button>
    </form>
    );
  }
};

export default UpdateForm;

