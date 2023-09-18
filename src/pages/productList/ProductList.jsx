import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";
export default function ProductList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
  try {
    const res = await userRequest.get("products");
    const updatedUsers = res.data.map((user) => ({
      id: user._id, // Assuming the id is available as _id
      ...user,
    }));
    setUsers(updatedUsers);
  } catch (error) {
    console.log(error);
  }
};
    getUsers()
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
      const response = await axios.delete(`https://ivanatovillaart.com/api/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${TOKEN}`,
      },
    });
    setUsers(users.filter((item) => item.id !== id));
  } catch (error) {
    console.log('Error updating data:', error);
  }
    
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImgSpecial" src={`https://ivanatovillaart.com/public/images/${params.row.img[0]}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "desc",
      headerName: "Description",
      width: 160,
      color: "#fff",
    },
    {
      field: "categories",
      headerName: "categories",
      width: 120,
    },
    {
      field: "size",
      headerName: "size",
      width: 120,
    },
    {
      field: "keyWords",
      headerName: "keyWords",
      width: 200,
    },
    {
      field: "price",
      headerName: "price",
      width: 120,
    },{
      field: "author",
      headerName: "author",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/panel/imageUploader/" + params.row.id}>
              <button className="productListEdit">Add Images</button>
            </Link>
            <Link to={"/panel/editProperty/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="addNewBtn">
     <Link to="/panel/addProperty">
        <button className="btn-add">Add New</button>
      </Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={14}
        checkboxSelection
      />
    </div>
  );
}
