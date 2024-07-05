import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null)
// creating the socket server for users and create hooks 

export const useSocket = () => {
  const socket = useContext(SocketContext)
  return socket
}


export const SocketProvoider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io()
    console.log("socket connection", connection)
    setSocket(connection)
  }, [])
  socket?.on("connect_error", async (err) => {
    console.log("connect_error", err)
    await fetch('/api/socket')
  })
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}