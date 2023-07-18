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
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
   </div>
);

export default Page;
