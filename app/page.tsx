"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Users, Laptop, GraduationCap, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              UniSol
            </h1>
            <p className="text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Empowering India's Engineering Students with Solana Blockchain Technology
            </p>
            <Button size="lg" variant="secondary" className="animate-pulse">
              Join the Revolution <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap in blockchain education across India's engineering colleges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: "Education First",
                description: "Comprehensive training in Solana, Rust, and dApp development"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Community Driven",
                description: "Building a network of blockchain enthusiasts across universities"
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Innovation Focus",
                description: "Hands-on experience through workshops and hackathons"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card/50 p-6 rounded-lg border border-border/50 hover:border-border hover:bg-card transition-all"
              >
                <div className="mb-4 text-purple-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning paths designed for future blockchain developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Rust Programming",
                description: "Master the foundation of Solana development with our Rust programming course"
              },
              {
                icon: <Blocks className="w-8 h-8" />,
                title: "Smart Contracts",
                description: "Learn to write and deploy smart contracts on the Solana blockchain"
              },
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "dApp Development",
                description: "Build decentralized applications from scratch with hands-on projects"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Blockchain Clubs",
                description: "Join or establish blockchain clubs in your college"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 p-6 bg-card/50 rounded-lg border border-border/50 hover:border-border hover:bg-card transition-all"
              >
                <div className="text-purple-400">{program.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Start Your Blockchain Journey?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Join UniSol today and become part of India's growing Web3 community
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Join a Club
              </Button>
              <Button variant="outline" size="lg">
                Partner with Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}