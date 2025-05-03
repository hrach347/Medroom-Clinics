import styles from './style.module.css';

const ListComponent = ({ data }) => {
    return (
        <ul className={styles.list}>
            {
                data.map((list, index) => 
                    <li key={index}>{list.description}</li>
                )
            }
        </ul>
    );
};

export default ListComponent;