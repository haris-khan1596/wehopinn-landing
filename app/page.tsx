import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyWeHopinn } from "@/components/landing/why-wehopinn";
import { SocialProof } from "@/components/landing/social-proof";
import { FAQ } from "@/components/landing/faq";
import { InquiryForm } from "@/components/landing/inquiry-form";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhyWeHopinn />
        <SocialProof />
        <FAQ />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
