import propTypes from "prop-types";
import Notification from "components/Notification/Notification";

export default function Statistics ({state,  total , positivePercentage, toUpperCase }) {

    if (total() === 0){
        return <Notification message="There is no feedback"/>
    }
    return (
    <div className="statistics">    
    {Object.keys(state).map( label => <p className="stats" key={label}>{toUpperCase(label)}: {state[label]} </p>)}
    <p className="stats">Total: {total()}</p>
    <p className="stats">Positive feedback: {positivePercentage()? positivePercentage(): "0" }%</p> 
      
    </div> 
    )
}


Statistics.propTypes = {
state: propTypes.shape({
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
}),

total:propTypes.func,
positivePercentage:propTypes.func,
toUpperCase:propTypes.func,

}