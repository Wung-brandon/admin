import './home.scss'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widgets/widget'
import Featured from '../../components/featured/featured'
import Chart from '../../components/chart/chart'
import TableComponent from '../../components/table/tables'

function Home(){
    return(
        <div className='home'>
            <Sidebar />
           
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="last 6 months (revenue)" aspect={2/1}/>   
                </div>
                <div className="listContainer">
                    <div className="listTitle">latest transactions</div>
                    <TableComponent />
                    
                </div>
            </div>
            
        </div>
    )
}

export default Home