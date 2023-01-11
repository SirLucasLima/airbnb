import Image from 'next/image'

export default function Footer(){
  return(
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Acessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty aweseome clone</p>
        <p>Referrals accepted</p>
        <p>NextJS</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Sir Lucas Lima</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Curriculum Vitae</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say hi </p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      

    </div>
  )
}