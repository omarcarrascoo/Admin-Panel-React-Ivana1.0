import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Flag,
  LocalPostOfficeTwoTone,
  LocationOn,
  ZoomIn,
  Category,
  NoteAdd,
  Cancel,
  EventAvailable,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function Sidebar() {
  const history = useHistory();
  const logOut = () =>{
    localStorage.clear()
    history.push('/')
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/panel/dashboard" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Actions</h3>
          <ul className="sidebarList">
            {/* <Link to="/panel/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link> */}
            <Link to="/panel/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/panel/events" className="link">
              <li className="sidebarListItem">
                <EventAvailable className="sidebarIcon" />
                Events
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Categories</h3>
          <ul className="sidebarList">
            <Link to="/panel/categories" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                Categories
              </li>
            </Link>

          </ul>
        </div> */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Options</h3>
          <ul className="sidebarList">
            <li onClick={()=>logOut()}className="sidebarListItem">
              <Cancel className="sidebarIcon" />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
