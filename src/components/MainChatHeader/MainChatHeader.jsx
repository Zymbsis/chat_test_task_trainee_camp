import { useSelector } from 'react-redux';
import { selectActiveChat } from '../../redux/chats/selectors';
import img from '../../img/kotik.jpg';
import css from './MainChatHeader.module.css';

const MainChatHeader = () => {
  const activeChat = useSelector(selectActiveChat);

  return (
    <div className={css.mainChatHeader}>
      {activeChat ? (
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
              <button>Edit Chat</button>
            </li>
            <li>
              <button>Remove Chat</button>
            </li>
          </ul>
        </>
      ) : (
        <p>Hello World</p>
      )}
    </div>
  );
};

export default MainChatHeader;
