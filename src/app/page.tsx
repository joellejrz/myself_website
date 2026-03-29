import HeroSection from '@/components/HeroSection';
import ShopSection from '@/components/ShopSection';
import TourSection from '@/components/TourSection';
import NewsletterSection from '@/components/NewsletterSection';
import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShopSection />
      <TourSection />
      <NewsletterSection />
      <BentoGrid />
    </main>
  );
}
