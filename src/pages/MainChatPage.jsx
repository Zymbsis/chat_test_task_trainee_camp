import clsx from 'clsx';
import test from '../../test.json';
import { parseDate, parseFullDate } from '../helpers/parseDate';
import css from './MainChatPage.module.css';

const MainChatPage = () => {
  return (
    <div className={css.wrapper}>
      <aside className={css.chatSidebar}>
        <div className={css.chatControl}>
          <div className={css.profileBar}>
            <img
              className={css.avatar}
              src='../../public/vite.svg'
              width={50}
              height={50}></img>
            <button className={css.logoutBtn}>Log out</button>
          </div>
          <input
            className={css.searchChat}
            type='text'
            placeholder='Search or start new chat'
          />
        </div>

        <p className={css.label}>Chats</p>
        <ul className={css.chatsList}>
          {test.map((item) => (
            <li key={item.id}>
              <div className={css.messageWrapper}>
                <img
                  className={css.avatar}
                  src='../../public/vite.svg'
                  width={50}
                  height={50}></img>
                <p>
                  <span>
                    {item.firstName} {item.lastName}
                  </span>
                  <span> {item.messages[item.messages.length - 1].text}</span>
                </p>
              </div>
              <span className={css.date}>
                {parseDate(item.messages[item.messages.length - 1].date)}
              </span>
            </li>
          ))}
        </ul>
      </aside>
      <div className={css.messageThread}>
        <div className={css.chatHeader}>
          <div className={css.profile}>
            <img
              className={css.chatHeaderAvatar}
              src='../../public/vite.svg'
              width={50}
              height={50}></img>
            <p>
              {test[0].firstName} {test[0].lastName}
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
        </div>
        <ul className={css.conversation}>
          {test[0].messages.map((item) => (
            <li
              key={item.id}
              className={clsx(css.conversationItem, {
                [css.fromMe]: item.from === 'me',
              })}>
              {item.from !== 'me' ? (
                <img
                  className={css.chatHeaderAvatar}
                  src='../../public/vite.svg'
                  width={50}
                  height={50}></img>
              ) : null}
              <p>
                <span>{item.text}</span>
                <span>{parseFullDate(item.date)}</span>
              </p>
            </li>
          ))}
        </ul>

        <form className={css.form}>
          <input
            type='text'
            placeholder='Type your message'
          />
        </form>
      </div>
    </div>
  );
};

export default MainChatPage;
