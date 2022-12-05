import { useState } from "react";

function App() {
  const anecdotesArr = [
    {
      quote: "If it hurts, do it more often.",
      vote: 0,
    },
    {
      quote: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    {
      quote: "Premature optimization is the root of all evil.",
      vote: 0,
    },
    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      quote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vote: 0,
    },
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(anecdotesArr);
  const [mostVoted, setMostVoted] = useState(null);

  const getRandomAnecdote = () => {
    const min = 0;
    const max = anecdotes.length - 1;

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(random);
  };

  const calculateMostVoted = () => {
    const maxVote = Math.max(...anecdotes.map((x) => x.vote));
    const mostVotedAnecdoteIndex = anecdotes.findIndex(
      (x) => x.vote === maxVote
    );
    setMostVoted(mostVotedAnecdoteIndex);
  };

  const onVoteClick = () => {
    const anecdotesCopy = [...anecdotes];
    anecdotesCopy[selected].vote += 1;
    setAnecdotes(anecdotesCopy);
    calculateMostVoted();
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]?.quote}</p>
      <p>has {anecdotes[selected]?.vote} vote(s)</p>
      <button onClick={onVoteClick}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      {mostVoted !== null && (
        <>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[mostVoted]?.quote}</p>
          <p>has {anecdotes[mostVoted]?.vote} vote(s)</p>
        </>
      )}
    </>
  );
}

export default App;
