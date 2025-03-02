const Score = ({ correct, incorrect }) => {
    return (
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-lg">✅ {correct} | ❌ {incorrect}</p>
        </div>
    );
};

export default Score;
