import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../assets/css/cheeseburger.css";

class HamburgerMenu extends Component {
  backToResults(){
    this.props.history.goBack();
  }
  render() {
    const {history, resultsPath} = this.props;
    return (
      <div className="sidebar">
            {window.navigator.onLine ?
              <div className="pages">
                {resultsPath !== "/" && history ?
                  <h1 onClick={()=>{history.push(resultsPath)}}>back to results</h1>
                  : ''
                }
                <Link to="/"><h1>home</h1></Link>
                <Link to="/itinerary"><h1>itinerary</h1></Link>
                <Link to="/about-us"><h1>about us</h1></Link>
              </div>
              :
              <div className="pages">
                <Link to="/itinerary"><h1>itinerary</h1></Link>
              </div>
            }
      </div>
    )
  }
}

export default HamburgerMenu;
