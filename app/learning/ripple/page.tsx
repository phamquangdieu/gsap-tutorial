import styles from './styles.module.css';
const RippleAnimation = () => {
    return (
        <div className={styles.circle}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
        </div>
    )
};

export default RippleAnimation;