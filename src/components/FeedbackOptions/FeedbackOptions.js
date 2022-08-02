import propTypes from "prop-types";

export default function FeedbackOptions ({options, onLeaveFeedback}){
    
    return <div className="btn_container">
    {Object.keys(options).map( label => <button className="btn" type="button" onClick={onLeaveFeedback} key={label}>{label}</button>)}
    </div>
}

FeedbackOptions.propTypes = {
    options: propTypes.shape({
        good: propTypes.number.isRequired,
        neutral: propTypes.number.isRequired,
        bad: propTypes.number.isRequired,
    }),
    
    onLeaveFeedback:propTypes.func,
    
    }