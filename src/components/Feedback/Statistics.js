import React from 'react';
import s from './Feedback.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <div>
    <h2>Statistics</h2>

    {Boolean(totalFeedback) ? (
      <div>
        <ul className={s.StatisticList}>
          <li>Good: {good} </li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>

        <div>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}</p>
        </div>
      </div>
    ) : (
      <p>No feedback given</p>
    )}
  </div>
);

// class Statistics extends Component {
//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback()) {
//       return (
//         Math.floor((this.state.good / this.countTotalFeedback()) * 100) + '%'
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <ul className={s.StatisticList}>
//           <li>Good: {this.state.good} </li>
//           <li>Neutral: {this.state.neutral}</li>
//           <li>Bad: {this.state.bad}</li>
//         </ul>

//         {Boolean(this.countTotalFeedback()) && (
//           <div>
//             <p>Total: {this.countTotalFeedback()}</p>
//             <p>
//               Positive feedback: {' ' + this.countPositiveFeedbackPercentage()}
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default Statistics;
