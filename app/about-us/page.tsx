import Awards from "@/screens/about/widgets/Awards";
import Clients from "@/screens/about/widgets/Clients";
import Services from "@/screens/about/widgets/Features";
import Newsletter from "@/screens/about/widgets/NewsLetter";
import Stats from "@/screens/about/widgets/Stats";

const AboutUs = () => {
  return (
    <section className="flex flex-col mt-12  px-2">
      <Services />
      <Stats />
      <Clients />
      <Awards />
      <Newsletter />
    </section>
  );
};

export default AboutUs;
