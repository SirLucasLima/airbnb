import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"

import ExploreData from "../data/ExploreData.json"
import CardsData from "../data/CardsData.json"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LimaBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {ExploreData?.map((item, index) => (
              <SmallCard 
                key={index}
                img={item.img} 
                location={item.location} 
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {CardsData?.map((item, index) => (
              <MediumCard 
                key={index}
                img={item.img}
                title={item.title} 
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}

export default Home
