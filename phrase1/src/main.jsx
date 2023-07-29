import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./component/Header/Header.jsx";






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className={"body"}>
          <div className={'header'}>
              <Header />
          </div>
                <App />

      </div>
  </React.StrictMode>,
)
