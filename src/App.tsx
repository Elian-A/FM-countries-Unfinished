import Header from "./components/header/header.component";
import Index from "./components/index/index.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./components/country/country";
import CountryError from "./components/countryError/countryError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/:country",
    element: <Country />,
    errorElement: <CountryError />,
  },
]);

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
