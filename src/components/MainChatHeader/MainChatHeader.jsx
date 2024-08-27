import { useSelector } from 'react-redux';
import img from '../../img/kotik.jpg';
import css from './MainChatHeader.module.css';
import { useModal } from '../../context/createModalContext';
import { selectActiveChat } from '../../redux/chats/slice';
import UpdateChatModal from '../UpdateChatModal/UpdateChatModal';
import DeleteChatModal from '../DeleteChatModal/DeleteChatModal';

const MainChatHeader = () => {
  const activeChat = useSelector(selectActiveChat);
  const { openModal } = useModal();
  const openUpdateChatModal = () => {
    openModal(<UpdateChatModal />);
  };
  const openDeleteChatModal = () => {
    openModal(<DeleteChatModal />);
  };

  return (
    <div className={css.mainChatHeader}>
      {activeChat && (
        <>
          <div className={css.contact}>
            <img
              src={img}
              width={50}
              height={50}
            />
            <p>
              {activeChat.firstName} {activeChat.lastName}
            </p>
          </div>
          <ul className={css.btnWrapper}>
            <li>
              <button onClick={openUpdateChatModal}>Edit Chat</button>
            </li>
            <li>
              <button onClick={openDeleteChatModal}>Remove Chat</button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default MainChatHeader;
