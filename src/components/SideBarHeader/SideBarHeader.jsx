import css from './SideBarHeader.module.css';
import img from '../../img/kotik.jpg';
import { useModal } from '../../context/createModalContext';
import CreateChatModal from '../CreateChatModal/CreateChatModal';

const SideBarHeader = ({ valueForSearch, handleChangeValue }) => {
  const { openModal } = useModal();

  const openCreateChatModal = () => {
    openModal(<CreateChatModal />);
  };

  const handleChange = ({ target: { value } }) => {
    handleChangeValue(value);
  };

  return (
    <div className={css.sidebarHeader}>
      <div className={css.userBar}>
        <img
          className={css.avatar}
          src={img}
          width={50}
          height={50}
        />
        <div className={css.btnWrapper}>
          <button
            className={css.logoutBtn}
            onClick={openCreateChatModal}>
            Add new chat
          </button>
          <button className={css.logoutBtn}>Log out</button>
        </div>
      </div>
      <input
        className={css.inputField}
        type='text'
        placeholder='Search or start new chat'
        value={valueForSearch}
        onChange={handleChange}
      />
    </div>
  );
};

export default SideBarHeader;
