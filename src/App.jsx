import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Legal = lazy(() => import("./pages/Legal"));
const Appointment = lazy(() => import("./pages/Appointment"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/legal"
              element={<Legal />}
            />
            <Route
              path="/appointment"
              element={<Appointment />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
