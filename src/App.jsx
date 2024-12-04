import { Routes, Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import Layout from "./components/layout/Layout";
import CounterPage from "../src/pages/CounterPage";
import ModalPage from "../src/pages/ModalPage";
import QuizletPage from "./pages/QuizletPage";
import FriendListPage from "./pages/FriendListPage";
import CurrencyConverterPage from "./pages/CurencyConverterPage";
import ImageGalleryPage from "./pages/ImageGalleryPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/modal" element={<ModalPage />} />
              <Route path="/quizlet" element={<QuizletPage />} />
              <Route path="/friend-list" element={<FriendListPage />} />
              <Route
                path="/currency-converter"
                element={<CurrencyConverterPage />}
              />
              <Route path="/image-gallery" element={<ImageGalleryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
