import { useDispatch } from "react-redux";
import { logOut, setFlag } from "../../store/features/user/userSlice";

export default function Disconnection(){
    const dispatch=useDispatch()
    dispatch(logOut())
    dispatch(setFlag(false))
    
}