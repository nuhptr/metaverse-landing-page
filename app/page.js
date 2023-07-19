import { Footer, Navbar } from "../components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "../sections";

export const metadata = {
   title: "Metaversus",
   description: "Metaversus is a metaverse that is built on top of the Ethereum blockchain.",
};

const Page = () => (
   <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
         <About />
         <div className='gradient-03 z-0' />
         <Explore />
      </div>
      <div className='relative'>
         <GetStarted />
         <div className='gradient-04 z-0' />
         <WhatsNew />
      </div>
      <World />
      <div className='relative'>
         <Insights />
         <div className='gradient-05 z-0' />
         <Feedback />
      </div>
      <Footer />
   </div>
);

export default Page;
