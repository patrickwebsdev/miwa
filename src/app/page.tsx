import Navbar from "@/features/Navbar";
import Hero from "@/features/Hero";
import Articles from "@/features/Articles";
import Characteristics from "@/features/Characteristics";
import Details from "@/features/Details";
import Reviews from "@/features/Reviews";
import About from "@/features/About";

export default function Home() {
  return (
    <>
      <Navbar transparent={true} />
      <Hero />
      <main>
        <Characteristics />
        <Details />
        <Articles />
        <Reviews />
        <About />
      </main>
    </>
  );
}
