import "../../styles/loader.css";

const Loader = ({ text = "Loading..." }) => {
    return (
        <div className="loader-container">
            <div className="loader-card">
                <div className="loader-spinner"></div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Loader;