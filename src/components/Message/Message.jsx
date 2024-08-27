import { parseFullDate } from 'helpers/parseDate';
import avatar from 'img/avatar.jpg';
import clsx from 'clsx';
import css from './Message.module.css';

const Message = ({ chat: { from, text, date } }) => {
  const formattedDate = parseFullDate(date);

  return (
    <>
      {from !== 'me' && (
        <img
          className={css.avatar}
          src={avatar}
          width={50}
          height={50}
        />
      )}

      <p className={clsx(css.message, { [css.fromMe]: from === 'me' })}>
        <span>{text}</span>
        <span>{formattedDate}</span>
      </p>
    </>
  );
};

export default Message;
