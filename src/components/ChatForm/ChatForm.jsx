import { useModal } from 'context/createModalContext';
import css from './ChatForm.module.css';

const ChatForm = ({ register, errors, onSubmit, btnName }) => {
  const { handleCloseModal } = useModal();

  return (
    <form
      onSubmit={onSubmit}
      className={css.form}
      autoComplete='off'>
      <div className={css.inputFieldWrapper}>
        <label>
          First name
          <input
            {...register('firstName')}
            placeholder='First name'
          />
        </label>
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div className={css.inputFieldWrapper}>
        <label>
          Last name
          <input
            {...register('lastName')}
            placeholder='Last name'
          />
        </label>
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div className={css.buttonWrapper}>
        <button type='submit'>{btnName}</button>
        <button
          type='button'
          onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
