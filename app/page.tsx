import { CategoryNavigation } from '@/components/category-navigation';
import { HomeHighlights } from '@/components/home/highlights';
import { BrandStory } from '@/components/brand-story';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <CategoryNavigation />
      <HomeHighlights />
      <BrandStory />
    </div>
  );
}
