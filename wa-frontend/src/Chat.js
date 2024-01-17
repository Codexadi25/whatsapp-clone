import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {



  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
          <h3>Room</h3>
          <p>Last seen at </p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>
          Aditya Sahu
          </span>
          I m Aditya
          <span className='chat__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message receiver'>
          <span className='chat__name'>
            Aditya Sahu
          </span>
          I m Aditya
          <span className='chat__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className='chat__footer'>
        <IconButton>
          <SentimentSatisfiedAltSharpIcon/>
        </IconButton>
        <form>
          <input placeholder='Type a message' type='text'/>
          <IconButton type='submit'><SendIcon/></IconButton>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat