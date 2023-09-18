import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import CategoriesList from "./pages/categoriesList/categoriesList";
import CategoriesPageList from "./pages/categoryPageList/categoriesPageList";
import UpdateUser from "./pages/user/updateUser";
import { useHistory } from 'react-router-dom';
import AddCategory from "./pages/categories/categoriesAdd";
import UpdateCategories from "./pages/categories/categoriesUpdate";
import AddCategoryPage from "./pages/categoryPage/categoriesaPageAdd";
import UpdateCategoriesPages from "./pages/categoryPage/categoriesPageUpdate";
import AddProperty from "./pages/property/addProperty";
import UpdateProperty from "./pages/property/propertyUpdate";
import AddImage from "./pages/imageUpload/ImageAdd";
import AddImageEvent from "./pages/imageUploadEvent/ImageAdd";


function App() {
  
  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const admin = currentUser && currentUser.accessToken ? currentUser.isAdmin : '';

  const history = useHistory()
  if (!admin) {
    
    return (
      <Router>
        <Login />
      </Router>
    )
  }
// useEffect(()=>{
//   window.location.reload()
// }, [admin])
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
     {admin &&(
      <>
       <Topbar />
      <div className="container">
        <Sidebar />
          <Route  path="/panel/dashboard">
            <Home />
          </Route>
          <Route path="/panel/users">
            <UserList />
          </Route>
          <Route path="/panel/user/:userId">
            <User />
          </Route>
          <Route path="/panel/newUser">
            <NewUser />
          </Route>
          <Route path="/panel/products">
            <ProductList />
          </Route>
          <Route path="/panel/newproduct">
            <NewProduct />
          </Route>
          
          <Route path="/panel/events">
            <CategoriesList/>
          </Route>
          <Route path="/panel/categories-pages">
            <CategoriesPageList/>
          </Route>
          <Route path="/panel/addCategoryPage">
            <AddCategoryPage/>
          </Route>
          <Route path="/panel/editCategoryPage/:id">
            <UpdateCategoriesPages/>
          </Route>
          <Route path="/panel/updateUser/:id">
            <UpdateUser/>
          </Route>
          <Route path='/panel/addEvent'>
            <AddCategory/>
          </Route>
          <Route path='/panel/editCategory/:id'>
            <UpdateCategories/>
          </Route>
          <Route path='/panel/addProperty'>
            <AddProperty/>
          </Route>
          <Route path='/panel/editProperty/:id'>
            <UpdateProperty/>
          </Route>
          <Route path='/panel/imageUploader/:id'>
            <AddImage/>
          </Route>  
          <Route path='/panel/imageUploaderEvent/:id'>
            <AddImageEvent />
          </Route>  
      </div>
      </>
     )}
      </Switch>
    </Router>
  );
}

export default App;
