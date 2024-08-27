import { useState } from 'react';
import ChatsList from '../ChatsList/ChatsList';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import css from './SideBar.module.css';

const SideBar = () => {
  const [valueForSearch, setValueForSearch] = useState('');
  const handleChangeValue = (newValue) => {
    setValueForSearch(newValue);
  };

  return (
    <aside className={css.sidebar}>
      <SideBarHeader
        valueForSearch={valueForSearch}
        handleChangeValue={handleChangeValue}
      />
      <ChatsList
        valueForSearch={valueForSearch}
        handleChangeValue={handleChangeValue}
      />
    </aside>
  );
};

export default SideBar;
