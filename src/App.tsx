import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Suspense } from "react";
import Loading from "./components/Loading";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
