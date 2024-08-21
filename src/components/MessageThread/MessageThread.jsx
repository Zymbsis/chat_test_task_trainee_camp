import clsx from 'clsx';
import css from './MessageThread.module.css';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectActiveChat } from '../../redux/chats/selectors';

const MessageThread = () => {
  const activeChat = useSelector(selectActiveChat);

  return (
    <div className={css.wrapper}>
      {activeChat ? (
        <ul className={css.messagesList}>
          {activeChat.messages.map((item) => (
            <li
              key={item.id}
              className={clsx(css.conversationItem, {
                [css.fromMe]: item.from === 'me',
              })}>
              <Message chat={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Hello world</p>
      )}
    </div>
  );
};

export default MessageThread;
