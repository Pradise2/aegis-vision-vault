import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

const Governance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <Card className="glass-card p-12 text-center space-y-4">
          <Lock className="h-16 w-16 mx-auto text-primary" />
          <Badge variant="outline" className="border-primary/50">Coming Soon</Badge>
          <h1 className="text-3xl font-bold">Governance</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Community governance features will be introduced in a future update. 
            Token holders will be able to vote on protocol upgrades, parameter changes, and treasury management.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Governance;
