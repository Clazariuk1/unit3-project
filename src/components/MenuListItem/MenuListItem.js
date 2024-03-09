import { useState } from 'react';
import ItemDescription from '../ItemDescription/ItemDescription';
import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  const [showDescription, setShowDescription] = useState(false)
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.image + ' ' + 'flex-ctr-ctr'}><img src={menuItem.image} /></div>
      <div className={styles.name} onClick={() => setShowDescription(!showDescription)}>{menuItem.name}</div>
      {showDescription ? <ItemDescription description={menuItem.description}/> : null }
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
