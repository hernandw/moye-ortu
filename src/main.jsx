import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

$(document).ready(() => {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
