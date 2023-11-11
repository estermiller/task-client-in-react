import { Link } from "react-router-dom";
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './NavBar.css'

export default function Nav1() {


    return <nav>
         <div className="navBar">

            <div className="line">
                <div className="line-1">  </div>
                <div className="line-2">
                
                <div className="navBar">

                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/login"> <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span>Log In</span></button> </Link>
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flex: 1, display: 'block' }}>
                                <Link to="/register"> <button data-id="btn7" class="btn-2 btn7"><div id="underline"></div><span>Register</span></button></Link>
                            </Typography>

                        </Toolbar>

                    </div></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
        </div>

    </nav>
    
}

