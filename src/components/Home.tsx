import '../Home.css';
import app from "../app/App";

function Home() {

    const handleClickHome = () => {
        window.alert("Donnez moi une quete");
    }

    return (
        <div>
            <h1 onClick={handleClickHome}>Bonjour, jeune aventurier</h1>
        </div>
    )
}

export default Home;