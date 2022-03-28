import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statisctics from './Statistics';

class CounterFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = options => {
    this.setState({ [options]: this.state[options] + 1 });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return (
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) + '%'
    );
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statisctics">
          {this.countTotalFeedback() > 0 ? (
            <Statisctics
              options={Object.entries(this.state)}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default CounterFeedback;
