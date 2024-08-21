import css from './SideBarHeader.module.css';
import img from '../../img/kotik.jpg';

const SideBarHeader = () => {
  return (
    <div className={css.sidebarHeader}>
      <div className={css.userBar}>
        <img
          className={css.avatar}
          src={img}
          width={50}
          height={50}
        />
        <button className={css.logoutBtn}>Log out</button>
      </div>
      <input
        className={css.inputField}
        type='text'
        placeholder='Search or start new chat'
      />
    </div>
  );
};

export default SideBarHeader;
