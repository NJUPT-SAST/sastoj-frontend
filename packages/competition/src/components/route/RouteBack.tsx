import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss'


export const RouteBack = ({ route }: { route: string }) => {
    const navigate = useNavigate();
    return <span  className={styles['icon']}><ChevronLeft size={24} onClick={() => { navigate(route, { replace: true }) }} /></span>
}