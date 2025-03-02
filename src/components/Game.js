import { useState, useEffect } from "react";
import ConfettiEffect from "./ConfettiEffect";
import dataset from "../data/dataset";

const Game = () => {
    const [destination, setDestination] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        loadRandomDestination();
    }, []);

    const loadRandomDestination = () => {
        const randomDest = dataset[Math.floor(Math.random() * dataset.length)];
        setDestination(randomDest);
        const wrongAnswers = dataset
            .filter((d) => d.city !== randomDest.city)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((d) => d.city);
        setOptions([randomDest.city, ...wrongAnswers].sort(() => 0.5 - Math.random()));
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    const checkAnswer = (answer) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === destination.city);
    };

    return (
        <div className="p-6 text-center game-container">
            {isCorrect && <ConfettiEffect />}
            <h2 className="text-2xl font-bold mb-4">Guess the Destination! 🌍</h2>
            {destination && (
                <>
                    <p className="text-lg italic mb-4">"{destination.clues[Math.floor(Math.random() * destination.clues.length)]}"</p>
                    <div className="grid grid-cols-2 gap-4">
                        {options.map((option) => (
                            <button
                                key={option}
                                className={`btn-primary p-2 border rounded-lg ${selectedAnswer
                                    ? option === destination.city
                                        ? "bg-green-500 text-white"
                                        : option === selectedAnswer
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-200"
                                    : "bg-blue-500 text-white hover:bg-blue-700"
                                    }`}
                                onClick={() => checkAnswer(option)}
                                disabled={selectedAnswer}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {selectedAnswer && (
                        <div className="mt-4">
                            <p className="text-lg font-bold">
                                {isCorrect ? "🎉 Correct!" : "😢 Wrong! It was " + destination.city}
                            </p>
                            <p className="text-sm italic">{destination.fun_fact[0]}</p>
                            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded" onClick={loadRandomDestination}>
                                Play Again 🔄
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Game;
