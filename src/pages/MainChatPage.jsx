import SideBar from '../components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import MainChat from '../components/MainChat/MainChat';
import { useDispatch } from 'react-redux';
import { getChatsList } from '../redux/chats/operations';

const MainChatPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChatsList());
  }, [dispatch]);
  const [activeChat, setActiveChat] = useState(null);

  return (
    <>
      <SideBar setActiveChat={setActiveChat} />
      <MainChat activeChat={activeChat} />
    </>
  );
};

export default MainChatPage;
