import css from './SendMessageForm.module.css';

const SendMessageForm = () => {
  return (
    <form className={css.form}>
      <input
        type='text'
        placeholder='Type your message'
      />
      <button type='submit'>X</button>
    </form>
  );
};

export default SendMessageForm;
