
import './home.css'
import NavBar from '../../navigation/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setFlag } from '../../store/features/user/userSlice';

export default function Home() {
  const flag = useSelector((state) => state.userSlice.flag)
  const dispatch = useDispatch();


  return <>
    {!flag&&
    <div className='contain'>

      <div className='text'>
        <h1>WELCOME</h1>
        <p>TO YOUR TASK POOL</p>
      </div>

      <button class="button type2" onClick={() => {dispatch(setFlag(true))}}>
        Login
      </button>

    </div>}
    
   {flag&&<NavBar/>} 
    
  </>
}