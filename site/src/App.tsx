import { Hero } from "./sections/Hero";
import { Note } from "./sections/Note";
import { Problem } from "./sections/Problem";
import { Patterns } from "./sections/Patterns";
import { Workflow } from "./sections/Workflow";
import { WhyAmp } from "./sections/WhyAmp";
import { WhyLayup } from "./sections/WhyLayup";
import { Technical } from "./sections/Technical";
import { Closing } from "./sections/Closing";
import { About } from "./sections/About";
import { Nav, MobileNav } from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <MobileNav />
      {/* <main className="mx-auto max-w-3xl px-6 pb-32 pt-0 lg:pl-56"> */}
      <main className="mx-auto max-w-4xl px-6 pb-32 pt-0 lg:pl-56">
        <Hero />
        <Note />
        <Problem />
        <Patterns />
        <WhyAmp />
        <Workflow />
        <WhyLayup />
        <Technical />
        <Closing />
        <About />
      </main>
    </div>
  );
}
