import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h1>Statistics</h1>
          </td>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        {good + bad + neutral > 0 && (
        <>
         <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)}/>
         <StatisticLine text='positive' value={(good / (good + bad + neutral)) * 100 + '%'}/>
        </>
      )}
      </tbody>
    </table>
  );
};
export default Statistics;