import { Provider } from "react-redux";
import store from "../../store";
import '../../style/App.css'
import Layout from "./Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
