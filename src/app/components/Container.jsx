import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Introduction2 from './Introduction2'
import Achievement from './Achievement'
import ClientTetimonials from './ClientTetimonials'
import Question from './Question'
import Footer from './Footer'

const Container = () => {
  return (
    <div>
        <Header />
        <Introduction />
        <Introduction2 />
        <Achievement />
        <ClientTetimonials />
        <Question />
        <Footer />
    </div>
  )
}

export default Container