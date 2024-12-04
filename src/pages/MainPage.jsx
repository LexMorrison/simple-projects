import { Link } from "react-router-dom";
function MainPage() {
  return (
    <section className="mainSection">
      <div className="mainWrapper">
        <h1 className="mainTitle">My projects, select and try them!</h1>
        <ul className="mainList">
          <li className="mainItem">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="mainItem">
            <Link to="/modal">Modal window</Link>
          </li>
          <li className="mainItem">
            <Link to="/quizlet">Try to pass the game</Link>
          </li>
          <li className="mainItem">
            <Link to="/friend-list">Friend List</Link>
          </li>
          <li className="mainItem">
            <Link to="/currency-converter">Currency Converter </Link>
          </li>
          <li className="mainItem">
            <Link to="/image-gallery">Image Gallery</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainPage;
