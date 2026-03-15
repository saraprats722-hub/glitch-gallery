import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BugFeed from '@/components/BugFeed';
import FeaturedBugs from '@/components/FeaturedBugs';
import CommunityFixes from '@/components/CommunityFixes';
import HallOfFame from '@/components/HallOfFame';
import BugCollection from '@/components/BugCollection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BugFeed />
        <FeaturedBugs />
        <CommunityFixes />
        <HallOfFame />
        <BugCollection />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
