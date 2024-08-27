import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'context/createModalContext';
import { selectActiveChatId, selectChatsList } from '@redux/chats/selectors';
import { getChatActive } from '@redux/chats/slice';
import ChatItem from '../ChatItem/ChatItem';
import CreateChatModal from '../CreateChatModal/CreateChatModal';
import clsx from 'clsx';
import css from './ChatsList.module.css';

const ChatsList = ({ valueForSearch, handleChangeValue }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const chatsList = useSelector(selectChatsList);
  const activeChatId = useSelector(selectActiveChatId);

  const filteredChatsList = chatsList
    .filter(
      (item) =>
        item.firstName.toLowerCase().includes(valueForSearch.toLowerCase()) ||
        item.lastName.toLowerCase().includes(valueForSearch.toLowerCase()),
    )
    .reverse();

  const openCreateChatModal = () => {
    handleChangeValue('');
    openModal(<CreateChatModal />);
  };
  const handleChangeActiveChat = (id) => {
    dispatch(getChatActive(id));
  };

  return (
    <>
      <p className={css.title}>Chats</p>
      {filteredChatsList.length > 0 && (
        <ul className={css.chatsList}>
          {filteredChatsList.map((item) => (
            <li
              key={item._id}
              className={clsx({ [css.active]: activeChatId === item._id })}
              onClick={() => handleChangeActiveChat(item._id)}>
              <ChatItem chat={item} />
            </li>
          ))}
        </ul>
      )}
      {filteredChatsList.length === 0 && (
        <button
          className={css.createChatBtn}
          type='button'
          onClick={openCreateChatModal}>
          Start new chat
        </button>
      )}
    </>
  );
};

export default ChatsList;
