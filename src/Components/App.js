import { Provider } from "react-redux";
import Body from "./Body";
import AppStore from "./utils/AppStore";
import { Toaster } from 'react-hot-toast';

const App = ()=>(
        <Provider store={AppStore}>
        <Body/>
        <Toaster />
        </Provider>
);
export default App;