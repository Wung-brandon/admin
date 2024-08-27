import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { LanguageOutlined, 
         FullscreenExitOutlined, 
         NotificationsNoneOutlined,
         ListOutlined,
         ChatBubbleOutlineOutlined,
         DarkModeOutlined
        } from '@mui/icons-material'
import branImg from '../../assets/wung.png'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

export default function Navbar(){

    const {dispatch} = useContext(DarkModeContext)
    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <SearchOutlinedIcon className='icon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined />English
                    </div>
                    <div className="item" onClick={() => dispatch({type:"TOGGLE"})}>
                        <DarkModeOutlined className='icon' style={{cursor:"pointer"}}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon'/>
                        <div className="counter">5</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className='icon'/>
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <ListOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <img src={branImg} alt="" className='avatar'/>
                    </div>

                </div>
            </div>
        </div>
    )
}