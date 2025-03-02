import { motion } from "framer-motion";

const Result = ({ isCorrect, correctCity, funFact, onNext }) => {
    return (
        <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className={`text-2xl font-bold ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                {isCorrect ? "🎉 Correct!" : `😢 Wrong! It was ${correctCity}`}
            </h2>
            <p className="mt-2 text-lg italic">{funFact}</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600" onClick={onNext}>
                Play Again 🔄
            </button>
        </motion.div>
    );
};

export default Result;
