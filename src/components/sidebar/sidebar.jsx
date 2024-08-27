import './sidebar.scss'
import branImg from '../../assets/wung.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


export default function Sidebar(){

    const {dispatch} = useContext(DarkModeContext)
    return(
        <div className="sidebar">
            <Link to='/' style={{textDecoration:"none"}}>
                <div className="top">
                    <img src={branImg} alt="brandonImg" className='bran-img'/>
                    <span className="logo-name">wung brandon</span>
                </div>
            </Link>

            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{textDecoration:"none"}}>
                        <li>
                            <DashboardIcon className='icon'/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>

                    <Link to='/users' style={{textDecoration:"none"}}>
                    <li>
                        <Person2OutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>

                    <Link to='/products' style={{textDecoration:"none"}}>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <ViewStreamOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <QuizOutlinedIcon className='icon'/>
                        <span>FAQS</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleRoundedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="color-option" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}