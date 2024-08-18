import styles from './index.module.scss'

export const SelfSuccess = ({ time, memory, stdout }: { time: number | undefined, memory: number | undefined, stdout: string | undefined }) => {
    return (
        <div className={styles.container}>
            <span className={styles.status}>通过</span>
            <span className={styles.more}>输出结果: {stdout}</span>
            <span className={styles.more}>执行用时: {`${time} MS` || 'N/A'}</span>
            <span className={styles.more}>内存占用: {`${memory} MB` || 'N/A'}</span>
        </div>
    )
}