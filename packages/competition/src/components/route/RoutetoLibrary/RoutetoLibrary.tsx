import { Button } from "@ui-aurora/react"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss'

export const RoutetoLibrary = () => {
    const navigate = useNavigate();
    return (
        <Button
            className={styles["route-botton"]}
            size="large"
            color="ghost"
            onClick={() => { navigate('/Library') }}
        >
            <span>前往答题</span>
            <ArrowRight />
        </Button>
    )
}