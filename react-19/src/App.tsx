
import { Suspense } from "react";
import FetchData from "./components/FetchData";
const App = () => {
  return <Suspense> 
    <FetchData />
  </Suspense>
};

export default App;
