import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from "../../store/features/task/taskSlice"
import './Tasks.css'
//import { useNavigate } from "react-router-dom";//"---------",
import Task from "../Task/Task";

export default function Tasks() {
    const currentUser = useSelector((st) => st.userSlice.currentUser)
   // let navigate = useNavigate();//"---------",
    const mess = useSelector((st) => st.taskSlice.message)

    const dispatch = useDispatch()
    const myTasks = useSelector((st) => st.taskSlice.tasks_ar)

    useEffect(() => {
        // if (currentUser.username != "---------") {
            dispatch(getAllTasks(currentUser._id))
        // }
        // else
        //     navigate("/login")
    }, [])

    return <div>
        {mess}
        <h1>welcome to the {currentUser.username}</h1>
       {  myTasks?.filter((item) => item.completed === false).map((t)=> <Task key={t._id} task={t}/>)}
    </div>
}

