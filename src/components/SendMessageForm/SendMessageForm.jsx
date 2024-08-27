import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveChatId } from '@redux/chats/selectors';
import { getQuotes, sendMessage } from '@redux/chats/operations';
import { useForm } from 'react-hook-form';
import { formatDateToISO } from 'helpers/formatDateToISO';
import icon from 'img/sprite.svg';
import clsx from 'clsx';
import css from './SendMessageForm.module.css';

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

  const { register, handleSubmit, reset } = useForm({
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
    dispatch(sendMessage({ _id: activeChatId, params: message }));
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
