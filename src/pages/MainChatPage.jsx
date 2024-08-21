import css from './MainChatPage.module.css';
import SideBar from '../components/SideBar/SideBar';
import { useState } from 'react';
import MainChat from '../components/MainChat/MainChat';

const MainChatPage = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className={css.wrapper}>
      <SideBar setActiveChat={setActiveChat} />
      <MainChat activeChat={activeChat} />
    </div>
  );
};

export default MainChatPage;
