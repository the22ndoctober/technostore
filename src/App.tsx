import { store } from './redux/store'
import { Provider } from 'react-redux'
import Header from './components/header/Header'
import MainBar from './components/mainBar/MainBar'
import Content from './components/content/Content'
import './App.css'

function App() {

  return (
    <Provider store={store}>
    <div>
      <Header/>
      <MainBar/>
       <Content/> 
    </div>
    </Provider>
  )
}

export default App
