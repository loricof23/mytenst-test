import React, {useEffect} from "react";
import { connect } from "react-redux";

import { getData } from "./actions";

import './css/style.css';


const App = ({ data, getData}) => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
       <div className="list">
              {data && data.length > 0 ?
                data.map(item => {
                  return (
                      <div className="box"  key={item.id}>

                        <img src={item.owner.avatar_url} alt="image" className="avatar-img"></img>  
                        <div> Name : {item.name}</div>
                        <div> Repository : {item.owner.repos_url}</div>
                     
                      </div>
                         
                  );
                }) :
              
                  <span>Loading...</span>
                
              }
              </div>
    </div>
  );
  
}



const mapStateToProps = (state) => {
  return{
    data: state.data
  }
}

export default connect(mapStateToProps, {getData})(App);
