/* eslint-disable array-callback-return */
import './new.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import noImg from '../../assets/no img.jpeg'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

function New({inputs, title}){
    const [file, setFile] = useState("")
    console.log(file)
    return(
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src={file ? URL.createObjectURL(file) : noImg} 
                            alt="no img" 
                            className='leftImg'
                        />
                    </div>
                    <div className="right">
                        <form action="">

                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined style={{cursor:"pointer"}}/>
                                </label>
                                <input 
                                    type="file" 
                                    id='file' 
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{display:"none"}}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label htmlFor="">{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}
                          
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
           
            
       
    )
}

export default New