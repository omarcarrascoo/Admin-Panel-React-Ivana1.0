import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
  try {
    const res = await userRequest.get("users/?new=true");
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
  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "lastName", headerName: "Lastname", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/panel/updateUser/" + params.row.id}>
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
        <button>Add New</button>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
