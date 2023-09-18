// import React from 'react';

// function ImageVisualizer({ images }) {
//   console.log(images);
//   // Dentro de tu componente
//     const { images } = this.state; // Suponiendo que los datos se almacenan en el estado "data"
  
//     if (data === null) {
//       return <div>Cargando...</div>; // Otra opción es mostrar un spinner de carga
//     }
  
//     // Renderizar los datos cuando estén disponible
  
//   return (
//     <div>
//       <h1>Images</h1>
//       {images.map((image, index) => (
//         <img key={index} src={image.imgRoute} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// }

// export default ImageVisualizer;
import React from 'react';
import './ImageUpdate.css'
import axios from 'axios';
function ImageVisualizer({ images }) {

  const handleDelete = async (id, position) => {
    // const imagesDes = images.imgRoute
    try {
      await console.log(id);
      const imagesDes = images.img;
      const reversedDes = imagesDes;
      const desRemove = reversedDes.splice(position, 1);
      console.log("Eliminado:")
      console.log(desRemove)
      console.log(reversedDes);
      const originalRemove = desRemove.reverse()

        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        const response = await axios.put(`https://ivanatovillaart.com/api/productImage/deleteImgEvent/${id}`, imagesDes, {
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${TOKEN}`,
          },
        });
    } catch (error) {
      console.log("hay un error al borrar la imagen: ")
      console.log(error);
    }
  }
  if (images === null) {
    return <div>Cargando...</div>; // Otra opción es mostrar un spinner de carga
  }else{
    return (
    
        <div className='imgVisual'>
          <h1>Images</h1>
          {images.img.map((image, index) => (
            <div key={index} className="imgBox">
                <div className="imgImgBox">
                    <img className='imageProperties' key={index} src={`https://ivanatovillaart.com/public/images/${image}`} alt={`Image ${index}`} />
                </div>
                <div className="altImgBox">
                    <form action="">
                      {/* <input type="text" placeholder='Alt Text' /> */}
                      <div className="btnArea">
                        {/* <button className='btnPrimary'>Update</button> */}
                        <button className='btnSecondary' onClick={()=>handleDelete(images._id, index)}>Deleate</button>
                      </div>
                    </form>
                </div>
            </div>
          ))}
        </div>
      );
  }

  
}

export default ImageVisualizer;


