import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useModal } from 'context/createModalContext';
import ChatForm from '../ChatForm/ChatForm';
import { createNewChat } from '@redux/chats/operations';

const createChatSchema = yup.object({
  firstName: yup
    .string()
    .required('field is required')
    .min(3, 'must contain at least 3 characters')
    .max(30, 'must contain no more than 30 characters')
    .matches(/^[A-Za-z-]+$/, 'must contain only Latin letters and dashes'),
  lastName: yup
    .string()
    .required('field is required')
    .min(3, 'must contain at least 3 characters')
    .max(30, 'must contain no more than 30 characters')
    .matches(/^[A-Za-z-]+$/, 'must contain only Latin letters and dashes'),
});

const CreateChatModal = () => {
  const dispatch = useDispatch();
  const { handleCloseModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    resolver: yupResolver(createChatSchema),
  });
  const onSubmit = handleSubmit((data, form) => {
    console.log(data);
    dispatch(createNewChat(data));
    handleCloseModal(form);
  });
  return (
    <ChatForm
      register={register}
      errors={errors}
      onSubmit={onSubmit}
      btnName='Create'
    />
  );
};

export default CreateChatModal;
