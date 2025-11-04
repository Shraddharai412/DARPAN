import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Index } from './pages/index/Index.jsx'
import { Explore } from './pages/explore/Explore.jsx'
import { Error } from './pages/error/Error.jsx'
import  Navbar  from './pages/Navbar.jsx'
import HeroSection from './pages/Hero.jsx'
import AboutSection from './pages/AboutSection.jsx'
import WhyChoose from './pages/WhyChoose.jsx'
import Story from './pages/Story.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import ExclusiveDeals from './pages/Exclusivedeals.jsx'
// import OurCommunity from './pages/ourCommunity.jsx'
import TimelineSection from './pages/timeline.jsx'
import AwardsSection from './pages/Awards.jsx'
import Testimonials from './pages/Testimonials.jsx'
import VideoSection from './pages/Video.jsx'
import BlogsSection from './pages/Blogs.jsx'
import InquirySection from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import { LanguageProvider } from "./context/LanguageProvider";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="font-sans">
                <Navbar />
                <div id="home"><HeroSection /></div>
                <div id="about"><AboutSection /></div>
                <WhyChoose />
                <Story />
                <div id="products"><ProductDetails /></div>
                <ExclusiveDeals />
                <TimelineSection />
                <AwardsSection />
                <Testimonials />
                <VideoSection />
                <BlogsSection />
                <div id="contact"><InquirySection /></div>
                <Footer />
              </div>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
