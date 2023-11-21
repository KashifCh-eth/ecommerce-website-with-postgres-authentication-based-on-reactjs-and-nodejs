import MyRoutes from "./routing/Routes";
import authContext from "./store/store";
import { useState } from "react";
import { Provider } from "react-redux";
import { ReduxStore } from "./store/redux/ReduxStore";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <authContext.Provider value={{ token, setToken }}>
        <Provider store={ReduxStore}>
          <MyRoutes />
        </Provider>
      </authContext.Provider>
    </>
  );
}

export default App;
