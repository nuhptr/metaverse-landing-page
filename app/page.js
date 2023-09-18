import { Footers, Navbar } from '../components'
import { About, Explores, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections'

export const metadata = {
  title: 'Metaversus',
  description: 'Metaversus is a metaverse that is built on top of the Ethereum blockchain.',
}

export default function Page() {
  return (
    <div className='overflow-hidden bg-primary-black'>
      <Navbar />
      <Hero />

      <div className='relative'>
        <About />
        <div className='z-0 gradient-03' />
        <Explores />
      </div>

      <div className='relative'>
        <GetStarted />
        <div className='z-0 gradient-04' />
        <WhatsNew />
      </div>

      <World />

      <div className='relative'>
        <Insights />
        <div className='z-0 gradient-05' />
        <Feedback />
      </div>

      <Footers />
    </div>
  )
}
