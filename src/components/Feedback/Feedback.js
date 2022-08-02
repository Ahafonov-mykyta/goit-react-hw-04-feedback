import React from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";

export default class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    toUpperCaseFirstLetter = (word) => {
        const copy = word;
        return copy[0].toUpperCase() + copy.slice(1);
    }  

    incrementValue = (event) => {      
        const stateElementName = event.target.textContent;
        this.setState( prevState => ({ [stateElementName]: prevState[stateElementName] + 1} ))
    }  

    countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral;
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good/this.countTotalFeedback()*100)
    }

    render() {
          
        return  (
        <div className="container">
            <Section title="Please leave feedback" >
                <FeedbackOptions 
                  options={this.state} 
                  onLeaveFeedback={this.incrementValue}
                />
            </Section> 

            <Section title="Statistics" >
            <Statistics 
              state={this.state} 
              total={this.countTotalFeedback} 
              positivePercentage={this.countPositiveFeedbackPercentage} 
              toUpperCase={this.toUpperCaseFirstLetter}
            />
            </Section> 

         

        </div>
        )
      }

    }