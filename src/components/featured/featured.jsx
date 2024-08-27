import './featured.scss'
import React from 'react'
import { MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { KeyboardArrowDownOutlined,
         KeyboardArrowUpOutlined
 } from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className="title">total revenue</h1>
            <MoreVert style={{fontSize:"medium", cursor:"pointer"}}/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar 
                    value={70} 
                    text='70%' 
                    strokeWidth={5}
                />
            </div>
            <p className="title">total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
                previous transactions processing. last payments may not be included
            </p>

            <div className="summary">

                <div className="item">
                    <div className="itemTitle">target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlined fontSize='small' />
                        <div className="resultAmt">$12.4K</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">last week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize='small' />
                        <div className="resultAmt">$12.4K</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">last month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize='small' />
                        <div className="resultAmt">$12.4K</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
