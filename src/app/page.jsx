import Footer from './_components/Footer/footer';
import Hero from './_components/heroSection/hero';
import Service from './_components/serviceSection/service';
import Showcase from './_components/showcaseSection/showcase';
import Stats from './_components/statsSection/stats';
import Why from './_components/whySection/why';
import Process from './_components/processSection/process';
import Audience from './_components/audienceSection/audience';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Service />
      <Why />
      <Process />
      <Showcase />
      <Audience />
      <Footer />
    </>
  );
}