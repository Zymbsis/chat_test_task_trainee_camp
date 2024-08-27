import * as yup from 'yup';
import ChatForm from '../ChatForm/ChatForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveChat } from '../../redux/chats/slice';
import { updateChat } from '../../redux/chats/operations';
import { useModal } from '../../context/createModalContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const updateChatSchema = yup.object({
  firstName: yup
    .string()
    .min(3, 'must contain at least 3 characters')
    .max(30, 'must contain no more than 30 characters')
    .matches(/^[A-Za-z-]+$/, 'must contain only Latin letters and dashes'),
  lastName: yup
    .string()
    .min(3, 'must contain at least 3 characters')
    .max(30, 'must contain no more than 30 characters')
    .matches(/^[A-Za-z-]+$/, 'must contain only Latin letters and dashes'),
});

const UpdateChatModal = () => {
  const dispatch = useDispatch();
  const { handleCloseModal } = useModal();
  const activeContact = useSelector(selectActiveChat);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: activeContact.firstName,
      lastName: activeContact.lastName,
    },
    resolver: yupResolver(updateChatSchema),
  });

  const onSubmit = handleSubmit((data, form) => {
    console.log(data);
    dispatch(updateChat({ _id: activeContact._id, params: data }));
    handleCloseModal(form);
  });

  return (
    <ChatForm
      register={register}
      errors={errors}
      onSubmit={onSubmit}
      btnName='Update'
    />
  );
};

export default UpdateChatModal;
