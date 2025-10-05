import { Card } from "@/components/ui/card";
import { ArrowUpRight, Wallet } from "lucide-react";

export const UserPosition = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Your Position</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Balance Card */}
        <Card className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="h-4 w-4" />
            <span className="text-sm">Your Balance</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Deposited Amount</span>
              <span className="font-semibold">1,000.00 USDC</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Value</span>
              <span className="font-semibold text-success">1,025.50 USDC</span>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Vault Shares</span>
              <span className="font-semibold">995.00 aYUSDC</span>
            </div>
          </div>
        </Card>

        {/* Earnings Card */}
        <Card className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowUpRight className="h-4 w-4 text-success" />
            <span className="text-sm">Earnings</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Earnings</span>
              <span className="font-semibold text-success">+25.50 USDC</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">24h Earnings</span>
              <span className="font-semibold text-success">+1.50 USDC</span>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="text-sm text-muted-foreground">APY (Realized)</span>
              <span className="font-semibold text-success">12.34%</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
