"use client";

import Link from "next/link";
import { type Session } from "next-auth";
import { Button } from "@/components/ui/button";
import { Music, BarChart2, Clock } from "lucide-react";
import { motion } from "framer-motion";
interface AnimatedHomePageProps {
  session: Session | null;
}

export default function AnimatedHomePage({ session }: AnimatedHomePageProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Placeholder Features Section */}
      <section className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full bg-green-50 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to take the next step?
        </h2>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Join us today and explore all the amazing features we offer.
        </p>
        <Button className="mt-8 px-6 py-3 text-lg font-medium">
          Get Started Now
        </Button>
      </section>
    </div>
  );
}

function FeatureCard() {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 h-10 w-10 rounded-full bg-gray-300"></div>
      <h3 className="text-lg font-semibold">Feature Title</h3>
      <p className="mt-2 text-sm text-gray-500">
        Placeholder description for this feature.
      </p>
    </motion.div>
  );
}