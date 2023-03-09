import { useEffect, useRef } from "react";
import { useSession } from 'next-auth/react';
import nextI18nextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSockets } from "./useSocekt";
import EVENTS from "./confingChat";

export default function RealtimeChat() {
  const { socket, username, setUsername } = useSockets();
  const { data: session } = useSession();
  // const usernameRef = useRef<any>(null);

  // function handleSetUsername() {
  //   const value = usernameRef.current.value;
  //   if (!value) {
  //     console.log("failed");
  //     return;
  //   }

  //   setUsername(value);
  //   console.log("success");
  //   localStorage.setItem("username", value);
  // }

  // useEffect(() => {
  //   if (usernameRef)
  //     usernameRef.current.value = localStorage.getItem("username") || "";
  // }, []);

  return (
    <div>
      {!username && (
        <div className=" w-96 h-full bg-chartGray-default border-8 border-black">
          <div className=" flex flex-col p-5 items-center justify-center">
            <h3 className=" font-bold text-yellow-500 font-serif text-4xl mb-24 mt-10">
              Realtime Chat!
            </h3>

            {/* <input
              maxLength={15}
              placeholder="15자 이내로 작성해주세요"
              ref={usernameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline bg-yellow-500 text-center placeholder-gray-100 my-11"
            />
            <button
              onClick={handleSetUsername}
              className=" mt-52 text-white bg-yellow-500 w-56 h-14 rounded-xl font-bold text-lg"
            >
              START
            </button> */}
          </div>
        </div>
      )}
      {session?.user._id && (
        <div className=" w-96 h-full bg-chartGray-default border-8 border-black">
          <p>user: {session?.user.name}</p>
          <RoomsContainer />
          <MessagesContainer />
        </div>
      )}
    </div>
  );
}

function MessagesContainer() {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef<any>(null);
  const messageEndRef = useRef<any>(null);

  function handleSendMessage() {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });

    const date = new Date();

    setMessages((messages: any) => [
      ...messages,
      {
        username: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
      },
    ]);

    newMessageRef.current.value = "";
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!roomId) {
    return <div />;
  }

  return (
    <div>
      <div className=" bg-yellow-500 text-black m-5 p-5 overflow-y-scroll h-60">
        <div className=" text-white">
          {messages?.map(({ message, username, time }, index) => {
            return (
              <div key={index}>
                <div key={index}>
                  <span>
                    {username} - {time}
                  </span>
                  <span>{message}</span>
                </div>
              </div>
            );
          })}
          <div ref={messageEndRef} />
        </div>
      </div>
      <div className="m-5 p-5 text-white flex flex-col justify-center items-center">
        <textarea
          rows={1}
          placeholder="Tell us what you are thinking"
          ref={newMessageRef}
          className=" h-24 w-72 bg-yellow-400 text-white p-3"
        />
        <button
          onClick={handleSendMessage}
          className=" bg-yellow-400 text-white rounded-xl w-56 h-10 mt-5"
        >
          SEND
        </button>
      </div>
    </div>
  );
}

function RoomsContainer() {
  const { socket, roomId, rooms } = useSockets();
  const newRoomRef = useRef<any>(null);
  const roo: Record<string, { name: string }> = rooms as Record<string, { name: string }>
console.log(roo)
  function handleCreateRoom() {
    //get the room name
    socket.emit(EVENTS.CLIENT.GET_ROOMS);
    const roomName = newRoomRef.current.value || "";
    console.log('방이름 : ', roomName)
    if (!String(roomName).trim()) return;

    // emit room created event

    // set room name input to empty string
    newRoomRef.current.value = "";
  }

  function handleJoinRoom(key: any) {
    if (key === roomId) return;

    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  }

  return (
    <nav>
      <div className="  flex flex-col p-5 items-center justify-center">
        {/* <input
          maxLength={15}
          ref={newRoomRef}
          placeholder="Room name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline bg-yellow-500 text-center placeholder-gray-100 my-11"
        />
        <button
          onClick={handleCreateRoom}
          className=" mt-5 text-white bg-yellow-500 w-28 h-10 rounded-xl font-bold text-sm"
        >
          CREATE ROOM
        </button> */}
      </div>

      <ul className=" bg-yellow-500 text-white m-5 p-5 overflow-y-scroll h-20">
        {Object.keys(roo).map((key) => {
          return (
            <div key={key}>
              <li>
                <button
                  disabled={key === roomId}
                  title={`Join ${roo[key]}`}
                  onClick={() => handleJoinRoom(key)}
                >
                  {roo[key]?.name}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </nav >
  );
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
    },
    revalidate: 10,
  }
}