import React from 'react'
import './widget.scss'
import { KeyboardArrowUpOutlined,
         PersonOutlined,
         ShoppingCartOutlined,
         MonetizationOnOutlined,
         AccountBalanceWalletOutlined
 } from '@mui/icons-material'

function Widget( {type} ) {
  let data;

  // temporary
  const amount = 100
  const diff = 20
  switch(type){
    case "user":
      data = {
        title:"users",
        isMoney:false,
        link:"see all users",
        icon:<PersonOutlined 
                className='icon' 
                style={{color:"crimson",
                        backgroundColor:"rgba(255,0,0,0.2)"
                }}   
        />
      }
      break
      case "order":
        data = {
          title:"orders",
          isMoney:false,
          link:"view all orders",
          icon:<ShoppingCartOutlined 
                className='icon' 
                style={{color:"goldenrod",
                backgroundColor:"rgba(218,165,32,0.2)"
        }}
                />
        }
        break
        case "earning":
          data = {
            title:"earnings",
            isMoney:true,
            link:"view net earnings",
            icon:<MonetizationOnOutlined 
                    className='icon'
                    style={{color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"
            }} 
                  />
          }
          break
          case "balance":
            data = {
              title:"balance",
              isMoney:false,
              link:"see all details",
              icon:<AccountBalanceWalletOutlined 
                      className='icon' 
                      style={{color:"purple",
                      backgroundColor:"rgba(128,0,128,0.2)"
              }}
                    />
            }
            break
      default:
        
        break
  }
  const {title, isMoney, link, icon} = data
  return (
   
    <div className='widget'>
        <div className="left">
            <span className="title">{title}</span>
            <span className="count">{isMoney && "$"} {amount}</span>
            <span className="link">{link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlined />
                {diff}%
            </div>
            {icon}
        </div>
    </div>
  )
}

export default Widget