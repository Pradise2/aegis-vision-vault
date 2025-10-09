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
          <div className="flex justify-center items-center flex-wrap gap-6 mb-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link to="/governance" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Vote className="w-5 h-5" />
              <span>Governance</span>
            </Link>
            <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Docs</span>
            </Link>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Discord</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Security</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Terms</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Privacy</span>
            </a>
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