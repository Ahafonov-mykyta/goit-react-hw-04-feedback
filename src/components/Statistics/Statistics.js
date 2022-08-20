import propTypes from "prop-types";
import Notification from "components/Notification/Notification";

export default function Statistics ({good,bad,neutral,  total , positivePercentage }) {

    if (total() === 0){
        return <Notification message="There is no feedback"/>
    }
    return (
    <div className="statistics">    
    <p className="stats" key="1">Good: {good} </p>
    <p className="stats" key="2">Bad:  {bad}</p>
    <p className="stats" key="3">Neutral: {neutral}</p>
    <p className="stats" key="4">Total: {total()}</p>
    <p className="stats" key="5">Positive feedback: {positivePercentage()? positivePercentage(): "0" }%</p> 
      
    </div> 
    )
}


// Statistics.propTypes = {
// state: propTypes.shape({
//     good: propTypes.number.isRequired,
//     neutral: propTypes.number.isRequired,
//     bad: propTypes.number.isRequired,
// }),

// total:propTypes.func,
// positivePercentage:propTypes.func,
// toUpperCase:propTypes.func,

// }