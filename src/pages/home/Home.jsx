import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { useHistory } from 'react-router-dom/cjs/react-router-dom'


export default function Home() {
  // const history = useHistory()
    
  //       const localStorageValue = localStorage.getItem("persist:root");
  //       const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  //       const user = parsedValue.user || "";
  //       const currentUser = user ? JSON.parse(user).currentUser : {};
  //       console.log(currentUser);
  //       if(currentUser = null){
  //           history.push('/');
  //       }
  //       window.location.reload()
    
   
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
