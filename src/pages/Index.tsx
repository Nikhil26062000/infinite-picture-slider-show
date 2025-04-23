
import InfiniteCarousel from "@/components/InfiniteCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Infinite Carousel</h1>
        <InfiniteCarousel />
      </div>
    </div>
  );
};

export default Index;
