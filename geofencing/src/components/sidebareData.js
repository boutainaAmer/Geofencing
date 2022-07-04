import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
export const SidebarData =[
{
  title:"Dashboard",
  icon:<FaIcons.FaBars size='2rem'/>,
  gap: true
},

{
  title:"My Devices",
  icon:<BiIcons.BiDevices size='2rem'/>,
 
},
{
  title:"Add Geofencing",
  icon:<BiIcons.BiAddToQueue size='2rem'/>,
  
},
{
  title:"Notification",
  icon:<IoIcons.IoIosNotificationsOutline size='2rem'/>,
  gap: true
},
{
  title:"Accounts" ,
  icon:<MdIcons.MdAccountCircle size='2rem'/>,
 
},{
  title:"Setting" ,
  icon:<AiIcons.AiFillSetting size='2rem'/>
}
]