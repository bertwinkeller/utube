import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, SearchFeed, Navbar, VideoDetail, Feed } from './components/index'

 

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#111'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail/>} />
                <Route path="/channel/:id" element={<ChannelDetail/>} />
                <Route path="/search/:searchTerm" element={<SearchFeed/>} />

            </Routes>

        </Box>
    </BrowserRouter>
  )
}

export default App
