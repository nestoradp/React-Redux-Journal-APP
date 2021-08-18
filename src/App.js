import './styles/styles.scss'
import AppRoutes from "./routes/AppRoutes";
import {Provider} from "react-redux";
import {store} from "./Store/store";


function App() {
    return (
        <Provider store={store}>
            <AppRoutes/>
        </Provider>
    );
}

export default App;
