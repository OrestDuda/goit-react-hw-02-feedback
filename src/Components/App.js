import React, { Component } from "react";
import Container from "./Container/Container";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statisctics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  buttons = ["good", "neutral", "bad"];

  countTotalFeedback(data) {
    return Object.values(data).reduce((a, b) => a + b, 0);
  }
  countPositiveFeedbackPercentage(data) {
    return Math.round((data.good / this.countTotalFeedback(data)) * 100);
  }

  incrementValue = (event) => {
    if (event.currentTarget.value === "good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }
    if (event.currentTarget.value === "neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (event.currentTarget.value === "bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <Feedback
            values={this.buttons}
            incrementFunction={this.incrementValue}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback(this.state) === 0 ? (
            <Notification message={"No feedback given"} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;
