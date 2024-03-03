import styles from './ItemDescription.module.scss'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function ItemDescription(MenuListItem){

    return (
        <p className={styles.description}>{MenuListItem.description}</p>
    )
}
