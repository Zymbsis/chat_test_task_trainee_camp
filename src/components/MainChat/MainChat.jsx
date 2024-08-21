import MainChatHeader from '../MainChatHeader/MainChatHeader';
import MessageThread from '../MessageThread/MessageThread';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import css from './MainChat.module.css';

const MainChat = ({ activeChat }) => {
  return (
    <section className={css.mainChat}>
      <MainChatHeader activeChat={activeChat} />
      <MessageThread activeChat={activeChat} />
      <SendMessageForm />
    </section>
  );
};

export default MainChat;
