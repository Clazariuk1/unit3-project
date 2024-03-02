import styles from './ItemDescription.module.scss'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function ItemDescription(MenuListItem){

    return (
        <p className={styles.description}>{MenuListItem.description}</p>
    )
}

// ultimately the content of the return must display true item description. {MenuListItem.description.display= 'block'}
