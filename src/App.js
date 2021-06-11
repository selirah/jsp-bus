import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './components/Spinner'

const Main = lazy(() => import('./layout/Main'))

const App = (props) => {
  const { store, persistor } = props

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Suspense fallback={<Spinner />}>
          <Main />
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App
