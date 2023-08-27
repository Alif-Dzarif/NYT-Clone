import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './routes'
import store from './store'
import './index.css'


function App() {
  return (
    <div className='font-["Times New Roman"] bg-[#fffdfa]'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
