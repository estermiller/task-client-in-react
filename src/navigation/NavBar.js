import { useSelector } from "react-redux";
import Nav2 from "./Nav2";
import Nav1 from "./Nav1";
import './NavBar.css'

export default function NavBar() {
    const currentUser = useSelector((state) => state.userSlice.currentUser)
    return <div className="base">
       
        {currentUser.username?
            <Nav2 />
            :
            <Nav1 />
        }
       
    </div>

} 