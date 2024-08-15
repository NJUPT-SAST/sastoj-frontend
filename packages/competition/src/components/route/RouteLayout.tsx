import { LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const RouteLayout=()=>{
    const navigate = useNavigate();
    return  <LogOut onClick={() => { localStorage.clear(); navigate('/login', { replace: true }) }} />
}