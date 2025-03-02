import { useState } from "react";

const MAX_QUESTIONS = 4; // 🔥 Limit quiz to 4 questions

const questions = [
    {
        question: "What kind of trip do you prefer?",
        options: ["Adventure & Hiking", "Beach & Relaxation", "City & Culture", "Food & Nightlife"],
        mapping: ["Tokyo", "Paris", "New York", "Paris"]
    },
    {
        question: "What kind of weather do you enjoy?",
        options: ["Cold & Snowy", "Sunny & Warm", "Moderate & Pleasant", "Tropical"],
        mapping: ["New York", "Tokyo", "Paris", "Tokyo"]
    },
    {
        question: "What excites you most in a new city?",
        options: ["Historical Landmarks", "Shopping & Fashion", "Theme Parks & Anime", "Street Food & Markets"],
        mapping: ["Paris", "New York", "Tokyo", "Tokyo"]
    },
    {
        question: "What kind of nightlife are you looking for?",
        options: ["Clubs & Bars", "Quiet Lounges", "Street Parties", "Cultural Performances"],
        mapping: ["New York", "Paris", "Rio de Janeiro", "Tokyo"]
    }
];

// 🔥 Mapping city names to background images
const cityBackgrounds = {
    "Tokyo": "url('https://source.unsplash.com/1600x900/?tokyo')",
    "Paris": "url('https://source.unsplash.com/1600x900/?paris')",
    "New York": "url('https://source.unsplash.com/1600x900/?newyork')",
    "Rio de Janeiro": "url('https://source.unsplash.com/1600x900/?riodejaneiro')"
};

const Quiz = ({ onComplete }) => {
    const [answers, setAnswers] = useState([]);
    const [step, setStep] = useState(0);
    const [preferredCity, setPreferredCity] = useState(null);

    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers, answer];
        setAnswers(updatedAnswers);

        if (step + 1 < MAX_QUESTIONS) {
            setStep(step + 1);
        } else {
            const finalCity = getSuggestedCity(updatedAnswers);
            setPreferredCity(finalCity);
            onComplete(finalCity); // 🔥 Show final city
        }
    };

    const getSuggestedCity = (answers) => {
        const cityCounts = answers.reduce((acc, city) => {
            acc[city] = (acc[city] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(cityCounts).reduce((a, b) => (cityCounts[a] > cityCounts[b] ? a : b));
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-white text-center transition-all duration-700"
            style={{
                backgroundImage: preferredCity ? cityBackgrounds[preferredCity] : "url('https://source.unsplash.com/1600x900/?travel')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
                <h2 className="text-3xl font-bold mb-4">{questions[step].question}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {questions[step].options.map((option, index) => (
                        <button
                            key={index}
                            className="p-3 border rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg transition duration-300"
                            onClick={() => handleAnswer(questions[step].mapping[index])}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
