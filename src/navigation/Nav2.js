import { Link } from "react-router-dom";
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './NavBar.css'
import { useSelector } from "react-redux";
export default function Nav2() {
    const currentUser = useSelector((st) => st.userSlice.currentUser)
    const [f, setF] = React.useState(false)

    const getUser = () => {
        setF(true)
        setTimeout(() => setF(false), 1000)
    }
    return <nav>
        <div className="navBar">

            <div className="line">
                <div className="line-1">  </div>
                <div className="line-2">

                    <div className="navBar">

                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/tasks"> <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span>My Task</span></button> </Link>
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/taskhistoru"> <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span>My History</span></button></Link>
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/addtask">  <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span>Add Task</span></button></Link>
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/logout"> <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span> Log Out </span></button></Link>
                            </Typography>
                            <div >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="#46b59b"
                                    onClick={getUser}

                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </Toolbar>

                    </div></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
        </div>
       {f&&<div style={{marginLeft:'1190px',backgroundColor:'#46b59b', border:'3px solid #46b59b',width:'40px'}}>{currentUser.name}</div> }
    </nav>
}