import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';

const App = () => {

  const greenVoteNum = 100
  const redVoteNum = 200
  const allVoteNum = greenVoteNum + redVoteNum

  const greenVote = []
  const redVote = []
  greenVote[0] = greenVoteNum / allVoteNum
  redVote[0] = redVoteNum / allVoteNum

  const graphData = {
    // labels: ["result"],
    datasets: [
      {
        label: "賛成",
        data: greenVote,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 2
      },
      {
        label: "反対",
        data: redVote,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };

  /** グラフオプション */
  const graphOption = {
    responsive: true,
    animation: false,
    legend: {
      display: false,
      // position: 'bottom'
    },
    title: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
      }],
      yAxes: [{
        stacked: true,
        display: false,
      }],
    }
  }

  return (
    <div className="App" >
      <HorizontalBar data={graphData} options={graphOption} />
    </div >
  )
}

export default App
