import './single.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import profile from '../../assets/wung.png'
import Chart from '../../components/chart/chart'
import TableComponent from '../../components/table/tables'

function Single(){
    return(
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editBut">edit</div>
                        <h1 style={{
                            marginBottom:"20px",
                            color:"lightgray",
                            fontSize:"16px"
                        }}>Information</h1> 
                        <div className="item">
                            <img src={profile} className='itemImg'  alt="profileImg" />
                            <div className="details">
                                <h1 className="itemTitle">wung brandon</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">wung@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">phone: </span>
                                    <span className="itemValue">+237676575033</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">address: </span>
                                    <span className="itemValue">Molyko Buea</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">country: </span>
                                    <span className="itemValue">Cameroon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="last 6 months (revenue)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 style={{
                        textTransform:"capitalize",
                        fontSize:"18px",
                        color:"gray",
                        marginLeft:"1rem"
                    }}>last transactions</h1>
                    <TableComponent />
                </div>
            </div>


        </div>
           
            
       
    )
}

export default Single