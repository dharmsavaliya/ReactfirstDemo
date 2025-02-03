import * as React from "react";
import PropTypes from "prop-types";

function CountdownTimer(props) {
    const [time, setTime] = React.useState(props.startMinutes * 60);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    return (
        <div>
            Countdown Timer: {formatTime(time)}<br />
            <ul>
                {Array.isArray(props.items) && props.items.length > 0 ? (
                    props.items.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No items available</li>
                )}
            </ul>
        </div>
    );
}

// ✅ Adding PropTypes to Fix ESLint Error
CountdownTimer.propTypes = {
    startMinutes: PropTypes.number.isRequired, // startMinutes must be a number
    items: PropTypes.arrayOf(PropTypes.string).isRequired, // items must be an array of strings
};

// Usage Example
function App() {
    const items = ["React", "JavaScript", "CSS", "HTML"];
    return <CountdownTimer startMinutes={5} items={items} />;
}

export default App;
