import { Footer, Navbar } from "@/components";
import {
   About,
   Explore,
   Feedback,
   GetStarted,
   Hero,
   Insights,
   WhatsNew,
   World,
} from "@/sections";

export default function Page() {
   return (
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
}
