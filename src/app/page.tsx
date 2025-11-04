import { BrandStory } from "../components/brand-story";
import { CategoryNavigation } from "../components/category-navigation";
import { Header } from "../components/header";
import { HomeHighlights } from "../components/home/highlights";


export default function HomePage() {
  return (
    <>
    <Header />
    <div className="space-y-24 pb-24">
      <CategoryNavigation />
      <HomeHighlights />
      <BrandStory />
    </div>
    </>
  );
}
