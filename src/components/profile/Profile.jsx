import "./profile.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Profile() {
  return (
    <>
      <div className="featured">
        <div className="profileCover">
          <img className="profileCoverImg" src="assets/pic11.jpg" alt="" />
          <img className="profileUserImg" src="assets/pic1.jpg" alt="" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">James David</h4>
          <span className="profileInfoDesc">Product Designer</span>
        </div>
        <div className="summary">
            <div className="item">
            <div className="itemResult products">
                <div className="resultAmount"><b>1,269</b></div>
              </div>
              <div className="itemTitle">Products</div>
             
            </div>
            
            <div className="item">
            <div className="itemResult followers">
                <div className="resultAmount"><b>5.2k</b></div>
              </div>
              <div className="itemTitle">Followers</div>
              
            </div>
          </div>
        <div className="bottom">
        <div className="top">
          <h1 className="title1">Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
          <div className="featuredChart">
            <CircularProgressbar value={76} text={"76%"} strokeWidth={5} />
          </div>
          <p className="amount">$26,256</p>
          <p className="title">Earning This Month</p>
          
          <p className="desc">
            <span style={{
                backgroundColor:"lightgreen",
                padding:"5px",
                borderRadius:"5px"
            }}>+2.65%</span> From previous period.
          </p>
        
        </div>
      </div>
    </>
  );
}
