import { useState } from "react";
import logo from "../assets/logo.png";
import control from "../assets/control.png";
import BasicMap from "./Leaflet/map";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "My Devices" },
    { title: "Add Geofencing"},
    { title: "Notification ",gap: true },
    { title: "Accounts"  },
    { title: "Setting", gap: true },]

  return (
    <div className="flex space-x-20">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control} alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo} alt=""
            className={`cursor-pointer duration-500 h-22 w-20 `}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            AEIT
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} alt="" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex-1">
        <h1 className="text-2xl font-semibold ">Maps</h1>
        <BasicMap/>
      </div>
    </div>
  );
};
export default Sidebar;