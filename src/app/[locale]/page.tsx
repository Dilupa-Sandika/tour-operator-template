import ErrorBoundary from "@/components/ErrorBoundary";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTours from "@/components/home/FeaturedTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <main>
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      {/* This container adds padding to the sections below the hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
        <ErrorBoundary>
          <FeaturedTours />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhyChooseUs />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
      </div>

      {/* Newsletter has a full-width background, so it's outside the main container */}
      <div className="bg-gradient-to-r from-primary via-primary-700 to-secondary-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorBoundary>
            <NewsletterSignup />
          </ErrorBoundary>
        </div>
      </div>
    </main>
  );
}