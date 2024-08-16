import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RouteBack = ({ route }: { route: string }) => {
    const navigate = useNavigate();
    return <ChevronLeft size={24} onClick={() => { navigate(route, { replace: true }) }} />
}