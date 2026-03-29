import HeroSection from '@/components/HeroSection';
import ShopSection from '@/components/ShopSection';
import TourSection from '@/components/TourSection';
import MusicSection from '@/components/MusicSection';
import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShopSection />
      <TourSection />
      <MusicSection />
      <BentoGrid />
    </main>
  );
}
