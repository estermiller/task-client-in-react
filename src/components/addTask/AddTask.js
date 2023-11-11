import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/features/task/taskSlice";
import { useNavigate } from "react-router-dom";
import './addTask.css'
import * as React from 'react';
import Input from '@mui/base/Input';
import { styled } from '@mui/system';


export default function AddTask() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const myNavigate = useNavigate()
    const dispatch = useDispatch()
    const myTasks = useSelector((state) => state.taskSlice.tasks_ar)
    const currentUser = useSelector((state) => state.userSlice.currentUser)

    const save = async (data) => {
        let task = { userId: currentUser._id, title: data.title, completed: data.completed }
        await dispatch(addTask(task))
        data.completed ? myNavigate('/taskhistoru') : myNavigate('/tasks')
    }

    const StyledInputElement = styled('input')(
        ({ theme }) => `
        width: 200px;
        hight:150px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: #46b59b;
        background: #fcedd8;
        border: 1px solid #46b59b;
        box-shadow: 0px 2px 2px #46b59b;
      
        &:hover {
          border-color: #eb452b;
        }
      
        &:focus {
          border-color: #46b59b;
          box-shadow: 0 0 0 3px #46b59b;
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    const CustomInput = React.forwardRef(function CustomInput(props, ref) {
        return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
    });

    return <form onSubmit={handleSubmit(save)} >
 <h3>Fill in the details of the new task:</h3>
        <center>
           
            <div>

                <p>

                    <CustomInput aria-label="Demo input" placeholder="Enter the task title" {...register("title", { required: { value: true, message: 'title is required' } })} />
                    {errors.title && <div className="div-error">
                        {errors.title.message}
                    </div>}
                </p>

                <p>
                    <label style={{ color: "#46b59b" }}>completed: </label>
                    <input type="checkbox"  {...register("completed")} />

                </p>

                <button class="button type1">
                    save
                </button>
            </div>
        </center>
    </form>
}








