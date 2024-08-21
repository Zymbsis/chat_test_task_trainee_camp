import css from './ChatsList.module.css';
import ChatItem from '../ChatItem/ChatItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatsList } from '../../redux/chats/selectors';
import { getChatActive } from '../../redux/chats/slice';

const ChatsList = () => {
  const dispatch = useDispatch();
  const chatsList = useSelector(selectChatsList);

  const handleChangeActiveChat = (chat) => {
    dispatch(getChatActive(chat));
  };

  return (
    <>
      <p className={css.title}>Chats</p>
      {chatsList.length > 0 && (
        <ul className={css.chatsList}>
          {chatsList.map((item) => (
            <li
              key={item.id}
              onClick={() => handleChangeActiveChat(item)}>
              <ChatItem chat={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChatsList;
