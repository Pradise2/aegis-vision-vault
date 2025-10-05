import { Navigation } from "@/components/Navigation";
import { VaultOverview } from "@/components/VaultOverview";
import { UserPosition } from "@/components/UserPosition";
import { DepositWithdraw } from "@/components/DepositWithdraw";
import { ActivityLog } from "@/components/ActivityLog";
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Audits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 AegisYield. DeFi investments carry risk. Please DYOR.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
