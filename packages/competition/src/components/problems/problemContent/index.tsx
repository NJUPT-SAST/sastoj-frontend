import { Button } from "@ui-aurora/react"
import { ContentSkeleton } from "../../skelecton/problems/content"
import styles from './idnex.module.scss'
import { useCaseMoreStore } from "../../../stores/useCaseMoreStore"

export const ProblemContentResult = ({ html, CaseId }: { html: string, CaseId: string | undefined }) => {
    const clearCaseId = useCaseMoreStore(state => state.clearCaseId)
    if (!html) {
        return <ContentSkeleton />
    }
    if (html && CaseId) return (
        <Button size='medium'
            color="primary"
            onClick={() => {
                clearCaseId()
            }}>测试</Button>
    )


    return <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles["markdown-content"]} />
}