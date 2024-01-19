import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import { useEffect } from 'react';


function App() {

  useEffect(() => {

  })

  useEffect(() => {
    var pusher = new Pusher('422488018a7574a0b5a3', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="App">
      <div className='appBody'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
