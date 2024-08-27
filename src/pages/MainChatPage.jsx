import css from './MainChatPage.module.css';
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
    <div className={css.wrapper}>
      <SideBar setActiveChat={setActiveChat} />
      <MainChat activeChat={activeChat} />
    </div>
  );
};

export default MainChatPage;
