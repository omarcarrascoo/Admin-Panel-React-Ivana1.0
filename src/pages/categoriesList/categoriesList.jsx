import "./categoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { userRequest } from "../../requestMethods";
export default function CategoriesList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
  try {
    const res = await userRequest.get("events");
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
  console.log(users);
  const handleDelete = async (id) => {
    try {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
      const user = parsedValue.user || "";
      const currentUser = user ? JSON.parse(user).currentUser : {};
      const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
    const response = await axios.delete(`https://ivanatovillaart.com/api/events/${id}`, {
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
    { field: "id", headerName: "ID", width: 200 },
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
      width: 120,
    },
    { field: "date", headerName: "Date", width: 150 },
    { field: "direction", headerName: "Direction", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/panel/imageUploaderEvent/" + params.row.id}>
              <button className="productListEdit">Add Images</button>
            </Link>
            <Link to={"/panel/editCategory/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
       <div className="addNewBtn">
        <Link to="/panel/addEvent"><button className="btn-add">Add New</button></Link>
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
