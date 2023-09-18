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
      <h1>Update Category Page</h1>
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
      <p>Category Name</p>
      <input
        placeholder='Nombre del pais: ej.México'
        type="text"
        name="categoryTitle"
        onChange={handleChange}
        value={formData.categoryTitle}
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
        value={formData.titleTag}
        onChange={handleChange}
      />
      <p>URL CATEGORY</p>
      <input
        placeholder='ej. terrenos-en-venta'
        type="text"
        name="urlCategory"
        onChange={handleChange}
        value={formData.urlCategory}
      />
      <p>URL COUNTRY</p>
      <input
        placeholder='ej. estados-unidos'
        type="text"
        name="urlCountry"
        onChange={handleChange}
        value={formData.urlCountry}
      />
      <p>URL PROVINCE</p>
      <input
        placeholder='ej. texas'
        type="text"
        name="urlProvince"
        onChange={handleChange}
        value={formData.urlProvince}
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
        placeholder='Descripcion de la categoria'
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
      <h1>Add Category Page</h1>
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
      <p>Category Name</p>
      <input
        placeholder='Nombre de la categoria: ej. Casas en Renta'
        type="text"
        name="categoryTitle"
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
      <p>URL CATEGORY</p>
      <input
        placeholder='ej. casas-en-renta'
        type="text"
        name="urlCategory"
        onChange={handleChange}
      />
      <p>URL COUNTRY</p>
      <input
        placeholder='ej. estados-unidos'
        type="text"
        name="urlCountry"
        onChange={handleChange}
      />
      <p>URL PROVINCE</p>
      <input
        placeholder='ej. texas'
        type="text"
        name="urlProvince"
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
        placeholder='Descripcion de la categoria'
        name="p"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Add</button>
    </form>
    );
  }
};

export default UpdateForm;

