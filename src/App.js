import React, { Component } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import Section from './components/Feedback/Section';

import s from './components/Feedback/Feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const buttonName = e.target.name;
    this.setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return (
        Math.floor((this.state.good / this.countTotalFeedback()) * 100) + '%'
      );
    }
  };

  render() {
    return (
      <div className={s.Container}>
        <Section title="FeedbackOptions">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            TotalFeedback={this.countTotalFeedback()}
            PositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
