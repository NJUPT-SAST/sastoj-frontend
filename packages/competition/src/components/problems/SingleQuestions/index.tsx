import { Badge, RadioGroup } from "@ui-aurora/react"
import styles from './index.module.scss';


export const SingleQuestion = () => {
    return (
        <>
            <div className={styles.container}>
                <span>1.</span>
                <Badge
                    content="单选题"
                    // style={{backgroundColor:'black'}}
                    size="small"
                    type="info"
                />
                <span>(5分)这是第一个问题?</span>
            </div>
            <RadioGroup
                defaultValue="nodejs"
                direction="vertical"
                onChange={(value) => { console.log(value)}}
                options={[
                    {
                        label: '第一个最大的元素👨',
                        value: 'nodejs',
                        size: 'large'
                    },
                    {
                        label: '第二个中等的元素👩',
                        value: 'vuejs',
                        size: 'large'
                    },
                    {
                        label: '第三个最小的元素🧒',
                        value: 'react',
                        size: 'large'
                    }
                ]}
            />
        </>
    )
}