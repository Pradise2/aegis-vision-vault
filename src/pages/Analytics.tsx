import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, Zap, DollarSign } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Deep dive into vault performance, AI strategy effectiveness, and historical data
          </p>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Avg Gain per Rebalance</span>
            </div>
            <p className="text-2xl font-bold text-success">+$420</p>
          </Card>

          <Card className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Total Rebalances (30d)</span>
            </div>
            <p className="text-2xl font-bold">24</p>
          </Card>

          <Card className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-4 w-4" />
              <span className="text-sm">Success Rate</span>
            </div>
            <p className="text-2xl font-bold text-success">96.8%</p>
          </Card>

          <Card className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">Total Fees (30d)</span>
            </div>
            <p className="text-2xl font-bold text-warning">$2,340</p>
          </Card>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="performance">Historical Performance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation History</TabsTrigger>
            <TabsTrigger value="ai">AI Model Performance</TabsTrigger>
          </TabsList>

          {/* Historical Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Net APY Over Time</h3>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: Net APY time series (7D, 30D, 90D, All-time)</p>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">7 Day APY</p>
                  <p className="text-2xl font-bold text-success">11.8%</p>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">30 Day APY</p>
                  <p className="text-2xl font-bold text-success">12.34%</p>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">90 Day APY</p>
                  <p className="text-2xl font-bold text-success">13.1%</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Total Value Locked Growth</h3>
              <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: TVL growth over time</p>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Protocol Comparison</h3>
              <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: AegisYield vs Compound vs Pendle APY comparison</p>
              </div>
            </Card>
          </TabsContent>

          {/* Allocation History Tab */}
          <TabsContent value="allocation" className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Allocation Changes Over Time</h3>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: Stacked area chart showing protocol allocation history</p>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Rebalancing Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <div className="space-y-1">
                      <p className="font-medium">Rebalance #{i}</p>
                      <p className="text-sm text-muted-foreground">{i * 2} days ago</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-medium">Compound ↔ Pendle</p>
                      <p className="text-sm text-success">+$420 realized</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Cost Breakdown (30 Days)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Gas Fees</p>
                  <p className="text-2xl font-bold text-warning">$1,240</p>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Slippage</p>
                  <p className="text-2xl font-bold text-warning">$580</p>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Protocol Fees</p>
                  <p className="text-2xl font-bold text-warning">$520</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* AI Model Performance Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Prediction Accuracy</h3>
              <div className="h-80 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: Predicted vs Realized gains scatter plot</p>
              </div>
              <div className="mt-4 text-center p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Overall Prediction Accuracy</p>
                <p className="text-3xl font-bold text-success">98.4%</p>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Model Confidence Distribution</h3>
              <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Chart: Histogram of confidence scores</p>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Top Performing Strategies</h3>
              <div className="space-y-3">
                {[
                  { name: "High APY Differential", success: "98%", avgGain: "$520" },
                  { name: "Gas-Optimized Small Moves", success: "96%", avgGain: "$180" },
                  { name: "Liquidity Event Capture", success: "94%", avgGain: "$670" },
                  { name: "Predictive Rate Changes", success: "99%", avgGain: "$840" },
                ].map((strategy, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <div className="space-y-1">
                      <p className="font-medium">{strategy.name}</p>
                      <p className="text-sm text-muted-foreground">Success Rate: {strategy.success}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{strategy.avgGain}</p>
                      <p className="text-sm text-muted-foreground">Avg Gain</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Analytics;
