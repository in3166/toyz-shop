import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import EVENTS, { SOCKET_URL } from 'fixtures/configChat';

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: { message: string; time: string; username: string }[];
  setMessages: Function;
  roomId?: string;
  rooms: object;
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
});

const SocketsProvider = (props: any) => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState([{ message: '', time: '', username: '' }]);

  useEffect(() => {
    window.onfocus = function () {
      document.title = 'Chat app';
    };
  }, []);

  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });

  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
    setMessages([]);
  });

  useEffect(() => {
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, tempUsername, time }) => {
      if (!document.hasFocus()) {
        document.title = 'New message...';
      }

      setMessages((prevMessage: any[]) => [...prevMessage, { message, tempUsername, time }]);
    });
  }, []);

  const socketValue = useMemo(
    () => ({
      socket,
      username,
      setUsername,
      rooms,
      roomId,
      messages,
      setMessages,
    }),
    [messages, roomId, rooms, username]
  );

  return <SocketContext.Provider value={socketValue} {...props} />;
};

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
