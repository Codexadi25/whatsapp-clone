import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChats() {
  return (
   <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChat__info'>
         <h2>Room</h2>
         <p>Last Message</p>
      </div>
   </div>
  )
}

export default SidebarChats