import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Book, Shield, Cpu, TrendingUp, Code, FileText } from "lucide-react";

const Docs = () => {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn how to deposit, withdraw, and interact with the AegisYield vault",
    },
    {
      icon: Cpu,
      title: "AI Strategy",
      description: "Understand how our AI model makes rebalancing decisions and optimizes yield",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Review our security measures, audits, and risk management practices",
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Deep dive into how we maximize returns across DeFi protocols",
    },
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Technical documentation for developers and integrators",
    },
    {
      icon: FileText,
      title: "Whitepaper",
      description: "Read the complete technical whitepaper and protocol design",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">Documentation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AegisYield's AI-powered vault, security, and protocol design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <Card
              key={i}
              className="glass-card p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer group"
            >
              <section.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 space-y-4">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <p className="font-medium">GitHub Repository</p>
              <p className="text-sm text-muted-foreground">View source code and contribute</p>
            </a>
            <a href="#" className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <p className="font-medium">Security Audits</p>
              <p className="text-sm text-muted-foreground">Review completed security audits</p>
            </a>
            <a href="#" className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <p className="font-medium">API Documentation</p>
              <p className="text-sm text-muted-foreground">Integration guide for developers</p>
            </a>
            <a href="#" className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <p className="font-medium">FAQ</p>
              <p className="text-sm text-muted-foreground">Frequently asked questions</p>
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Docs;
