import clsx from 'clsx';
import css from './MessageThread.module.css';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectActiveChat } from '../../redux/chats/slice';

const MessageThread = () => {
  const activeChat = useSelector(selectActiveChat);

  return (
    <div className={css.wrapper}>
      {activeChat && activeChat.messages.length > 0 && (
        <ul className={css.messagesList}>
          {activeChat.messages.map((item) => (
            <li
              key={item.date}
              className={clsx(css.conversationItem, {
                [css.fromMe]: item.from === 'me',
              })}>
              <Message chat={item} />
            </li>
          ))}
        </ul>
      )}
      {activeChat && activeChat.messages.length === 0 && (
        <div className={css.noMessage}>
          <p>There are no messages yet.</p>
        </div>
      )}
      {!activeChat && <p>Hello world</p>}
    </div>
  );
};

export default MessageThread;
