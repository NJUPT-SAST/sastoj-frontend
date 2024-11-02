import { Badge } from "@ui-aurora/react";
import styles from './index.module.scss'

export const StatusDescriptions = (status: number): [string, "ghost" | "success" | "error" | "warning" | "info" | undefined,string] => {
    //数组第三项
    switch (status) {
        case 0: return ['无效', "ghost",'#bdbdbd'];
        case 1: return ['通过', "success",'#2db55d'];
        case 2: return ['编译错误', "error",'#f63636'];
        case 3: return ['答案错误', "error",'#f63636'];
        case 4: return ['格式错误', "error",'#f63636'];
        case 5: return ['运行错误', "error",'#f63636'];
        case 6: return ['时间超限', "warning",'#ffdc00'];
        case 7: return ['内存超限', "warning",'#ffdc00'];
        case 8: return ['输出超限', "warning",'#ffdc00'];
        case 9: return ['等待中', "info",'#0090ff'];
        case 10: return ['评测中', "info",'#0090ff'];
        case 11: return ['系统错误', "error",'#f63636'];
        case 12: return ['不通过', "error",'#f63636'];
        default: return ["未知状态", "error",'#f63636'];
    }
}

export const StatusTag = ({ status }: { status: number }) => {

    const [content, type] = StatusDescriptions(status)
    return (
        <Badge className={styles.badge} type={type} content={content} />
    )
}