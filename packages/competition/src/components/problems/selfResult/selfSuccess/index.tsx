import styles from './index.module.scss'

export const SelfSuccess = ({ time, memory }: { time: number|undefined, memory: number|undefined }) => {
    return (
        <div className={styles.container}>
            <span className={styles.status}>通过</span>
            <span className={styles.more}>执行用时: {time || 'N/A'}</span>
            <span className={styles.more}>内存占用: {`${memory} MB` || 'N/A'}</span>
        </div>
    )
}