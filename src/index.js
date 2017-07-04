import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// import store from './store/index'

// ReactDOM.render(
//   <Provider store={store}><App /></Provider>,
//   document.getElementById('root')
// )

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
