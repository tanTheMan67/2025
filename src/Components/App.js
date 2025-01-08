import { Provider } from "react-redux";
import Body from "./Body";
import AppStore from "./utils/AppStore";

const App = ()=>(
        <Provider store={AppStore}>
        <Body/>
        </Provider>
);
export default App;