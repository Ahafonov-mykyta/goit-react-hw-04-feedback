import { useState, useEffect } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";

export default function Feedback () {


    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const incrementGoodValue = (event) => {      
        setGood( prevState => prevState + 1 )
    }  

    const incrementBadValue = (event) => {      
      setBad( prevState => prevState + 1 )
  }  
  const incrementNeutralValue = (event) => {      
    setNeutral( prevState => prevState + 1 )
}  

    const countTotalFeedback = () => {
        return good + bad + neutral;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good/countTotalFeedback()*100)
    }

   
          
        return  (
        <div className="container">
            <Section title="Please leave feedback" >
                <FeedbackOptions 
                  incrementGoodValue={incrementGoodValue}
                  incrementBadValue={incrementBadValue}
                  incrementNeutralValue={incrementNeutralValue}
                />
            </Section> 

            <Section title="Statistics" >
            <Statistics 
              good={good}
              bad= {bad}
              neutral={neutral}
              total={countTotalFeedback} 
              positivePercentage={countPositiveFeedbackPercentage} 
            />
            </Section> 

         

        </div>
        )
      

    }