import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from './components/layouts/Layout'
import { NotFound } from './pages/404page/404'
import { CallsPage } from './pages/callsPage/CallsPage'
import {Results} from './pages/resultsPage/Results'
import { Orders } from "./pages/ordersPage/Orders"
import {Messages} from "./pages/messagesPage/Messages"
import {Partners} from './pages/partnersPage/Partners'
import {Documents} from './pages/documentsPage/Documents'
import {Executors} from './pages/executorsPage/Executors'
import {Reports} from './pages/reportsPage/Reports'
import {Knowledge} from './pages/knowledgePage/Knowledge'
import { Settings } from "./pages/settingsPage/Settings"



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="results" element={<Results />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
            <Route path="calls" element={<CallsPage />} />
            <Route path="partners" element={<Partners />} />
            <Route path="documents" element={<Documents />} />
            <Route path="executors" element={<Executors />} />
            <Route path="reports" element={<Reports />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="settings" element={<Settings />} />
          </ Route >
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;