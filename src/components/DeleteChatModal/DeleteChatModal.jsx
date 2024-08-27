import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'context/createModalContext';
import { deleteChat } from '@redux/chats/operations';
import { selectActiveChat } from '@redux/chats/slice';
import css from './DeleteChatModal.module.css';

const DeleteChatModal = () => {
  const { handleCloseModal } = useModal();
  const activeChat = useSelector(selectActiveChat);
  const dispatch = useDispatch();
  const handleDeleteChat = (e) => {
    dispatch(deleteChat(activeChat._id));
    handleCloseModal(e);
  };

  const handleClose = (e) => {
    handleCloseModal(e);
  };

  return (
    <div className={css.wrapper}>
      <p>
        Are you sure you want to delete chat with{' '}
        <span>
          {activeChat.firstName} {activeChat.lastName}
        </span>{' '}
        and all messages in it?
      </p>
      <p>Once deleted, the chat cannot be restored!</p>
      <div className={css.btnWrapper}>
        <button
          type='button'
          onClick={handleDeleteChat}>
          Remove
        </button>
        <button
          type='button'
          onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteChatModal;
