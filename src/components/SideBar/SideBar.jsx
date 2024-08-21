import ChatsList from '../ChatsList/ChatsList';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import css from './SideBar.module.css';

const SideBar = ({ setActiveChat }) => {
  return (
    <aside className={css.sidebar}>
      <SideBarHeader />
      <ChatsList setActiveChat={setActiveChat} />
    </aside>
  );
};

export default SideBar;
