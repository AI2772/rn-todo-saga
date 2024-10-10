import React from 'react'
import TodoScreen from './components/TodoScreen'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  )
}

export default App