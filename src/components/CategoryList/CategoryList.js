import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat.name}
      className={cat.name === activeCat.name ? styles.active : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat.name}
    </li>
  );
  return (
    <ul className={styles.CategoryList}>
      {cats}
    </ul>
  );
}
