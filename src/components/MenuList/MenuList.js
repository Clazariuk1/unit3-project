import { useState } from 'react';
import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder, activeCat }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );
  return (
    <main className={styles.MenuList}>
      <div className={styles.catDescription}>{activeCat.description}</div>
      {items}
    </main>
  );
}
