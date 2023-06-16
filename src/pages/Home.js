import React from 'react'
import { BookingBtn, ClientsReviews, Display, NewsLetter, Products, Services } from '../components'
import ReUse from '../components/reUse/ReUse'
import Service from '../components/services/service/Service'

const Home = () => {
  return (
    <>
     <Display/>
     <Services/>
     <Service/>
     <ReUse name='explore beauty'/>
     <Products/>
     <BookingBtn/>
     <ClientsReviews/>
     <NewsLetter/>
    </>
  )
}

export default Home