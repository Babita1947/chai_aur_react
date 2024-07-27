import React from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'
import Home from './components/Home'

const data = [
    {
      
      url: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/2/2023_2$largeimg_382924107.jpg",
      heading: "Union Budget: 10 big-ticket announcements made by FM Sitharaman",
      description:"NEW DELHI: Finance minister Nirmala Sitharaman on Tuesday presented the Union Budget 2024 in Parliament.",
      datePosted: "17 hrs ago",
      direction: "Middle East"
    },
    {
      url: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/2/2023_2$largeimg_382924107.jpg",
      heading: "Union Budget: 10 big-ticket announcements made by FM Sitharaman",
      description:"NEW DELHI: Finance minister Nirmala Sitharaman on Tuesday presented the Union Budget 2024 in Parliament.",
      datePosted: "7 hrs ago",
      direction: "US & Canada"
    },
    {
      url: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/2/2023_2$largeimg_382924107.jpg",
      heading: "Union Budget: 10 big-ticket announcements made by FM Sitharaman",
      description:"NEW DELHI: Finance minister Nirmala Sitharaman on Tuesday presented the Union Budget 2024 in Parliament.",
      datePosted: "1 hrs ago",
      direction: "East India"
    },
    {
      url: "https://cdn.jns.org/uploads/2024/07/GettyImages-2162680434-1320x880.jpg",
      heading: "Netanyahu says America and Israel 'must stand together' as he addresses US Congress",
      description:"NEW DELHI: Finance minister Nirmala Sitharaman on Tuesday presented the Union Budget 2024 in Parliament.",
      datePosted: "17 hrs ago",
      direction: "West Bengal"
    },
    {
      url: "https://content.api.news/v3/images/bin/765916d7d4eb3f637644a580a5c9256c",
      heading: "Coconuts, brat and the viral campaign behind Kamala Harris",
      description:"NEW DELHI: Finance minister Nirmala Sitharaman on Tuesday presented the Union Budget 2024 in Parliament.",
      datePosted: "3 hrs ago",
      direction: "Middle East"
    },
]

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <div className='flex justify-center items-center'>
        {
          data.map((item,index) => {
            return (
              <Box key={index} item = {item}/>
            )
          })
        }
       
      </div>
    </>
  )
}

export default App
