import { Navigation } from "@/components/Navigation";
import { VaultOverview } from "@/components/VaultOverview";
import { UserPosition } from "@/components/UserPosition";
import { DepositWithdraw } from "@/components/DepositWithdraw";
import { ActivityLog } from "@/components/ActivityLog";
import { LayoutDashboard, TrendingUp, Vote, Code } from "lucide-react"; // Import Code icon
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0"> {/* Add padding-bottom for mobile to prevent content from being hidden by the fixed footer */}
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

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="flex justify-around items-center h-16">
          <Link to="/" className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link to="/analytics" className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Analytics</span>
          </Link>
          <Link to="/governance" className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Vote className="w-6 h-6" />
            <span className="text-xs">Governance</span>
          </Link>
          <Link to="/repository" className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Code className="w-6 h-6" />
            <span className="text-xs">Code</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Footer */}
      <footer className="hidden md:block border-t border-border/50 mt-20">
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
            <Link to="/repository" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Code</span>
            </Link>
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
