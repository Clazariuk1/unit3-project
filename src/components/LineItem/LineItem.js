import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineItem}>
    <div className={styles.image + ' ' + 'flex-ctr-ctr'}><img src={lineItem.item.image} /></div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineItem.item.name}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
  </div>
);
}
