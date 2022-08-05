import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import Chatbox from "../components/ChatBox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import { ChatState } from "../Context/ChatProvider";
const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer/>}
      <Box style={{display:'flex', justifyContent:"space-between", width:"100%", height:"91.5vh",padding:"10px"}}>
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
