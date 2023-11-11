import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../../store/features/task/taskSlice"
import './TaskHistory.css'
import Task from "../Task/Task";
import AddTask from "../addTask/AddTask";
import { Button, Dialog, DialogTitle } from "@mui/material";

export default function TaskHistory() {
    let [word, setWord] = useState('')
    let [open, setOpen] = useState(false)

    const currentUser = useSelector((st) => st.userSlice.currentUser)
    const mess = useSelector((st) => st.taskSlice.message)

    const dispatch = useDispatch()
    const myTasks = useSelector((st) => st.taskSlice.tasks_ar)

    useEffect(() => {
        dispatch(getAllTasks(currentUser._id))
    }, [])


    const filtered = useMemo(() => {
        return myTasks.filter(item => item.title?.includes(word) && item.completed)
    }, [word, myTasks])
    console.log('filter the  myTasks!', filtered);



    return <div className="all">
        {mess}
        <h1>welcome to the {currentUser.username}</h1>
        <input type="text" className="filter" placeholder="Filter by title..." onChange={(e) => setWord(e.target.value)} />
        <input type="button" className="filter" value='Add Task' onClick={() => setOpen(true)} />
        <br></br><br></br>
        {filtered?.map((t) => <Task key={t._id} task={t} />)}
        <br></br><br></br>
        <br></br><br></br>
        <Dialog className='dialog' open={open}>
            <DialogTitle ><AddTask /> </DialogTitle>
            <Button color='warning' onClick={() => setOpen(false)}>cencel</Button>
        </Dialog>



    </div>


}