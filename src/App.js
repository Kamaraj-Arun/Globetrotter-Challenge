import { useState } from "react";
import Quiz from "./components/Quiz";
import Game from "./components/Game";
import Score from "./components/Score";

const App = () => {
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [preferredCity, setPreferredCity] = useState(null);

  const updateScore = (isCorrect) => {
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">🌍 The Globetrotter Challenge</h1>
      <Score correct={score.correct} incorrect={score.incorrect} />
      {preferredCity ? (
        <>
          <h2 className="text-xl mb-4">We think you'd love {preferredCity}! 🏙️</h2>
          <Game updateScore={updateScore} />
        </>
      ) : (
        <Quiz onComplete={setPreferredCity} />
      )}
    </div>
  );
};

export default App;
