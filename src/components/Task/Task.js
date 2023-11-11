import { useDispatch } from 'react-redux'
import './Task.css'
import { deleteTask, updateTask } from '../../store/features/task/taskSlice';
import * as React from 'react';
import { Checkbox, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function Task({ task }) {
    const myDispatch = useDispatch();

    const deletetask = () => {
        myDispatch(deleteTask(task._id))
    }
    const completed = () => {
        myDispatch(updateTask({ ...task, completed: true }))
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return <>
        <div className='content'><center>

                <ListItem className='item' style={{ width: '35%', alignContent: 'center' }}

                    secondaryAction={
                        <Grid item xs={8}  >
                            <DeleteForeverOutlinedIcon onClick={deletetask} />

                        </Grid>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined}
                        dense>

                        <ListItemIcon>
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={completed} />
                        </ListItemIcon>
                        <ListItemText id={task.id} primary={task.title} />
                    </ListItemButton>
                </ListItem></center>
        </div>
        
    </>
}