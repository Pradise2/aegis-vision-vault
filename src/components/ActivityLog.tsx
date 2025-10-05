import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, TrendingUp, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    timestamp: "2 hours ago",
    action: "Rebalance: Moved 15% of TVL from Compound to Pendle",
    reason: "AI predicted net gain of +0.05% after costs. Confidence: 95%.",
    predicted: 500,
    realized: 520,
    status: "success",
  },
  {
    id: 2,
    timestamp: "1 day ago",
    action: "Rebalance: Adjusted allocation to 70% Compound, 30% Pendle",
    reason: "Pendle APY increased significantly. Confidence: 88%.",
    predicted: 350,
    realized: 345,
    status: "success",
  },
  {
    id: 3,
    timestamp: "3 days ago",
    action: "Rebalance: Minor optimization in favor of Compound",
    reason: "Gas costs favorable for small adjustment. Confidence: 92%.",
    predicted: 200,
    realized: 210,
    status: "success",
  },
];

export const ActivityLog = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">AI Strategy Log</h2>
        <Badge variant="outline" className="border-success/50 text-success">
          <CheckCircle className="h-3 w-3 mr-1" />
          All Systems Operational
        </Badge>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="glass-card p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{activity.timestamp}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{activity.action}</h3>
                  <p className="text-sm text-muted-foreground">{activity.reason}</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Predicted Gain</p>
                  <p className="text-lg font-semibold text-primary">
                    ${activity.predicted.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Realized Gain</p>
                  <p className="text-lg font-semibold text-success">
                    ${activity.realized.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1 col-span-2 md:col-span-1">
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <p className="text-lg font-semibold text-success">
                      {((activity.realized / activity.predicted) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs border-primary/50 hover:border-primary">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Transaction
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-primary/50 hover:border-primary">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Signed Instruction
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
