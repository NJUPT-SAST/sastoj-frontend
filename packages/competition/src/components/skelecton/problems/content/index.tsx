import styles from './index.module.scss'

export const ContentSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles["skeleton-header"]}></div>
            <div className={styles["skeleton-h2"]}></div>

            <div className={styles["skeleton-paragraph"]}></div>
            <div className={styles["skeleton-paragraph"]}></div>
            <div className={styles["skeleton-paragraph"]}></div>
            <div className={styles["skeleton-paragraph"]}></div>
            <div className={styles["skeleton-paragraph"]}></div>
            <div className={styles["skeleton-paragraph"]}></div>

            <div className={styles["skeleton-more"]}></div>
            <div className={styles["skeleton-more"]}></div>
        </div>
    )
}