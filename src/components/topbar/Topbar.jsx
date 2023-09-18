import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const localStorageValue = localStorage.getItem("persist:root");
  const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
  const user = parsedValue.user || "";
  const currentUser = user ? JSON.parse(user).currentUser : {};
  const username = currentUser && currentUser.email ? currentUser.email : '';
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="https://ivanatovillaart.com/public/images/logo-ivana.png" alt="Industrilux logo" />
        </div>
        <div className="topRight">
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
}
