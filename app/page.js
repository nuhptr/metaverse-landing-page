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
      <div>
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
