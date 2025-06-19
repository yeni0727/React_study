import { Provider } from 'react-redux'
import store from '/src/ReduxCounter/store'
import CounterComponent from './ReduxCounter/CounterComponent'

function App() {
   return (
      <Provider store={store}>
         <CounterComponent />
      </Provider>
   )
}

export default App
