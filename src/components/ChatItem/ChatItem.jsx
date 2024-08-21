import { parseDate } from '../../helpers/parseDate';
import img from '../../img/kotik.jpg';
import css from './ChatItem.module.css';

const ChatItem = ({ chat: { firstName, lastName, messages } }) => {
  const formattedDate = parseDate(messages[messages.length - 1].date);

  return (
    <>
      <div className={css.contact}>
        <img
          className={css.avatar}
          src={img}
          width={50}
          height={50}
        />
        <p>
          <span>
            {firstName} {lastName}
          </span>
          <span>{messages[messages.length - 1].text}</span>
        </p>
      </div>
      <span className={css.date}>{formattedDate}</span>
    </>
  );
};

export default ChatItem;
