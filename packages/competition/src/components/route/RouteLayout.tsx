import { LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss'

export const RouteLayout = () => {
    const navigate = useNavigate();
    return <span className={styles['icon']}><LogOut onClick={() => { localStorage.clear(); navigate('/login', { replace: true }) }} /></span>
}