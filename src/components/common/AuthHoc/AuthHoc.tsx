import { Navigate, Outlet } from "react-router-dom";
import { useShelter } from "../../../hooks/useShelter";

export function AuthHoc() {
 const {data, isLoading} = useShelter()
 const canAcess = !!data?.shelterWhatsApp

 if(isLoading) return null
 if(!canAcess) return <Navigate to="/admin" />
 return <Outlet />

}