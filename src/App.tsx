import { store } from "./redux/store"
import { Provider } from "react-redux"
import Header from "./components/header/Header"
import MainBar from "./components/mainBar/MainBar"
import Content from "./components/content/Content"
import "./App.css"
import DragnDrop from "./components/dragndrop/DragnDrop"

function App() {
    return (
        <Provider store={store}>
            <div>
                {/* <Header />
                <MainBar />
                <Content /> */}
                <DragnDrop />
            </div>
        </Provider>
    )
}

export default App
