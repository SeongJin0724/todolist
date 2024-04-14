import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Not = lazy(() => import("./pages/Not"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Not />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
