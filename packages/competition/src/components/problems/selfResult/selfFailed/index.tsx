import styles from './index.module.scss'

export const SelfFailed = ({ complieMsg, stdout, stderr }: { complieMsg: string | undefined, stdout?: string | undefined, stderr: string | undefined }) => {
    return (
        <div className={styles.container}>
            <div className={styles.errorTitle}>{complieMsg || '执行错误'}</div>
            {/* {stdout?<div className={styles.errorMessage}>
                {stdout}{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>:''} */}
            <div className={styles.errorMessage}>
                {stderr}{'\n'}
                {/* &nbsp;&nbsp;&nbsp;&nbsp;min = Math.min(min, preSum);{'\n'} */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}