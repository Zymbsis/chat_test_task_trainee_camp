import css from './SendMessageForm.module.css';
import icon from '../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveChatId } from '../../redux/chats/selectors';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sendMessage } from '../../redux/chats/slice';
import { formatDateToISO } from '../../helpers/formatDateToISO';
import { getQuotes } from '../../redux/chats/operations';

const sendMessageSchema = yup
  .object({
    message: yup
      .string()
      .required('field is required')
      .max(1000, 'must contain no more than 30 characters'),
  })
  .required();

const SendMessageForm = () => {
  const activeChatId = useSelector(selectActiveChatId);

  const dispatch = useDispatch();

  // console.log(activeChatId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { message: '' },
    resolver: yupResolver(sendMessageSchema),
  });

  const onSubmit = (data) => {
    if (!data.message.trim()) return;
    const message = {
      from: 'me',
      text: data.message,
      date: formatDateToISO(),
    };
    dispatch(sendMessage({ id: activeChatId, message }));
    dispatch(getQuotes(activeChatId));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(css.form, { [css.visible]: activeChatId })}>
      <input
        type='text'
        {...register('message')}
        placeholder='Type your message'
      />
      <button type='submit'>
        <svg role='img'>
          <use xlinkHref={`${icon}#icon-send`} />
        </svg>
      </button>
    </form>
  );
};

export default SendMessageForm;
