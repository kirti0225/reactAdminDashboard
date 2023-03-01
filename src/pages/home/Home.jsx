import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Profile from "../../components/profile/Profile";
import Linechart from "../../components/linechart/Linechart";

const Home = () => {
  return (
    <>
     <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="whole-content">
          <div className="contents">
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
          <Linechart/>
            <div className="listContainer">
              <div className="charts" style={{flex: '4.5',width:"50%"}}>
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
              </div>
              <div className="bar" style={{flex: '3',width:"50%", marginRight:"10px", marginBottom:"25px"}}>
                <Featured />
              </div>
              <div className="table" style={{flex: '4',width:"50%",marginTop:"5px"}}>
                <Table />
              </div>
            </div>
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Home;
