const Invite = ({ score }) => {
    const shareURL = `${window.location.origin}/challenge?score=${score}`;
    return (
        <div className="mt-4">
            <button
                className="px-4 py-2 bg-purple-500 text-white rounded"
                onClick={() => navigator.clipboard.writeText(shareURL)}
            >
                Challenge a Friend 🚀
            </button>
            <p className="text-sm mt-2">Invite link copied to clipboard!</p>
        </div>
    );
};

export default Invite;
