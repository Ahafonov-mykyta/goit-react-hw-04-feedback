import propTypes from "prop-types";

export default function FeedbackOptions ({incrementGoodValue, incrementBadValue , incrementNeutralValue}){
    
    return <div className="btn_container">
    <button className="btn" type="button" onClick={incrementGoodValue} key="good">good</button>
    <button className="btn" type="button" onClick={incrementBadValue} key="bad">bad</button>
    <button className="btn" type="button" onClick={incrementNeutralValue} key="neutral">neutral</button>
    </div>
}

// FeedbackOptions.propTypes = {
//     options: propTypes.shape({
//         good: propTypes.number.isRequired,
//         neutral: propTypes.number.isRequired,
//         bad: propTypes.number.isRequired,
//     }),
    
//     onLeaveFeedback:propTypes.func,
    
//     }