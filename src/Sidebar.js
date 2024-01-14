import React from 'react';
import './Sidebar.css';
import SidebarChats from './SidebarChats';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import { Avatar, IconButton } from '@mui/material';




function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
         <Avatar/>
         <div className='sidebar__headerRight'>
            <IconButton>
               <DonutLargeIcon/>
            </IconButton>
            <IconButton>
               <ChatIcon/>
            </IconButton>
            <IconButton>
               <MoreVertIcon/>
            </IconButton>
         </div>
      </div>
      <div className='sidebar__search'>
         <div className='sidebar__searchContainer'>
            <SearchIcon/>
            <input type='text' placeholder='Search here to start chat.'/>
         </div>
      </div>
      <div className='sidebar__chats'>
         <SidebarChats/>
         <SidebarChats/>
         <SidebarChats/>
      </div>
    </div>
  )
}

export default Sidebar