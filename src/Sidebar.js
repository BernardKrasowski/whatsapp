import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from "@material-ui/icons"
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>

      <div className="sidebar__header">
        <Avatar src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/178103485_3838936436190484_3596619077807659465_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FzPZfbC_tJgAX-qE4Mt&tn=zdr7KTmz1wQj7c-0&_nc_ht=scontent-lcy1-1.xx&oh=a9abf1a92f6430deabfc53b365caf948&oe=6122E442' />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>


    </div>
  )
}

export default Sidebar
