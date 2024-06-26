import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );

    return (
      <div className={styles.OrderDetail}>
        <div className={styles.sectionHeading}>
          {order.isPaid ?
            <span className={styles.orderSpan}>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span className={styles.orderSpan}>NEW ORDER</span>
          }
          <span className={styles.orderSpan}>{new Date(order.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col`}>
          {lineItems.length ?
            <>
              {lineItems}
              <section className={styles.total}>
                {order.isPaid ?
                  <span className={styles.totalWords}>ORDER TOTAL&nbsp;&nbsp;</span>
                  :
                  <span
                    className={styles.totalWords}
                    onClick={handleCheckout}
                    disabled={!lineItems.length}
                  >Click to CHECKOUT</span>
                }
                <div className={styles.totalBox}>
                <span>{order.totalQty} |</span>
                <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                </div>
              </section>
            </>
            :
            <div className={styles.hungry}>Your cart! It's Empty! Tragic!</div>
          }
        </div>
      </div>
    );
  }
