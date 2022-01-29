import {ChatEngine} from "react-chat-engine";
import ChatFeed from './components/ChatFeed'

import "./App.css";

const App = () => {
    return (
        <ChatEngine
          height="100vh"
          projectID="73cb4501-d20a-4b4b-bf39-0569c883c371"
          userName="Edvin"
          userSecret="123123"
          renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;