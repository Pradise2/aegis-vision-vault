import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, PieChart } from "lucide-react";

export const VaultOverview = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">AegisYield USDC Vault</h2>
        <p className="text-muted-foreground">AI-optimized yield aggregation with transparent rebalancing</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Net APY */}
        <Card className="glass-card p-6 space-y-2 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Net APY</span>
            <TrendingUp className="h-4 w-4 text-success" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-success">12.34%</p>
            <p className="text-xs text-muted-foreground">Annualized after fees</p>
          </div>
        </Card>

        {/* Total Value Locked */}
        <Card className="glass-card p-6 space-y-2 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Value Locked</span>
            <DollarSign className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold">$1,234,567</p>
            <p className="text-xs text-muted-foreground">Across all protocols</p>
          </div>
        </Card>

        {/* Underlying Asset */}
        <Card className="glass-card p-6 space-y-2 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Asset</span>
            <PieChart className="h-4 w-4 text-accent" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold">USDC</p>
            <p className="text-xs text-muted-foreground">Stablecoin vault</p>
          </div>
        </Card>
      </div>

      {/* Current Allocation */}
      <Card className="glass-card p-6 space-y-4">
        <h3 className="text-lg font-semibold">Current Allocation</h3>
        
        <div className="space-y-3">
          {/* Compound */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground">Compound</span>
              <span className="text-muted-foreground">70%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary-glow w-[70%]" />
            </div>
          </div>

          {/* Pendle */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground">Pendle</span>
              <span className="text-muted-foreground">30%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-success w-[30%]" />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
