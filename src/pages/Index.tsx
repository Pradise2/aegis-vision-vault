import { Navigation } from "@/components/Navigation";
import { VaultOverview } from "@/components/VaultOverview";
import { UserPosition } from "@/components/UserPosition";
import { DepositWithdraw } from "@/components/DepositWithdraw";
import { ActivityLog } from "@/components/ActivityLog";
import { LayoutDashboard, TrendingUp, Vote, BookOpen, Twitter, MessageCircle, Github, Shield, FileText, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            AI-Powered DeFi Vault
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Maximize your yield with transparent, AI-driven rebalancing across top protocols
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-12">
        <VaultOverview />
        <UserPosition />
        <DepositWithdraw />
        <ActivityLog />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex justify-center items-center gap-6 mb-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" title="Dashboard">
              <LayoutDashboard className="w-5 h-5" />
            </Link>
            <Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors" title="Analytics">
              <TrendingUp className="w-5 h-5" />
            </Link>
            <Link to="/governance" className="text-muted-foreground hover:text-primary transition-colors" title="Governance">
              <Vote className="w-5 h-5" />
            </Link>
            <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors" title="Docs">
              <BookOpen className="w-5 h-5" />
            </Link>
            <span className="text-border">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Discord">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <span className="text-border">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Security">
              <Shield className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Terms">
              <FileText className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Privacy">
              <Lock className="w-5 h-5" />
            </a>
            <span className="text-border">|</span>
            <ThemeToggle />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 AegisYield. DeFi investments carry risk. Please DYOR.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
