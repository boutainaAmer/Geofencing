import React from 'react'
import Sidebar from "./pages/sidebar"
import footer from "./pages/footer"
import topbar from "./pages/topbar"
export default function App() {
  return (
    <div>
      <topbar/>
      <Sidebar/>
      <footer/>
    </div>
  )
}
