import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { toast } from "sonner";

export const DepositWithdraw = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const walletBalance = 5000;
  const vaultBalance = 1025.5;

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    toast.success(`Successfully deposited ${depositAmount} USDC`);
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    toast.success(`Successfully withdrew ${withdrawAmount} USDC`);
    setWithdrawAmount("");
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Position</h2>

      <Card className="glass-card p-6">
        <Tabs defaultValue="deposit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="deposit" className="flex items-center gap-2">
              <ArrowDownToLine className="h-4 w-4" />
              Deposit
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="flex items-center gap-2">
              <ArrowUpFromLine className="h-4 w-4" />
              Withdraw
            </TabsTrigger>
          </TabsList>

          {/* Deposit Tab */}
          <TabsContent value="deposit" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label className="text-muted-foreground">Amount to Deposit</label>
                <span className="text-muted-foreground">
                  Balance: {walletBalance.toLocaleString()} USDC
                </span>
              </div>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="flex-1 bg-secondary border-border"
                />
                <Button
                  variant="outline"
                  onClick={() => setDepositAmount(walletBalance.toString())}
                  className="border-primary/50 hover:border-primary"
                >
                  Max
                </Button>
              </div>
            </div>

            {depositAmount && parseFloat(depositAmount) > 0 && (
              <Card className="bg-secondary/50 p-4 space-y-2 border-border/50">
                <h4 className="text-sm font-medium">Transaction Preview</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">You will receive (est.):</span>
                  <span className="font-semibold">
                    {(parseFloat(depositAmount) * 0.995).toFixed(2)} aYUSDC
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Exchange Rate:</span>
                  <span className="font-medium">1 aYUSDC = 1.025 USDC</span>
                </div>
              </Card>
            )}

            <Button
              onClick={handleDeposit}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!depositAmount || parseFloat(depositAmount) <= 0}
            >
              Deposit USDC
            </Button>
          </TabsContent>

          {/* Withdraw Tab */}
          <TabsContent value="withdraw" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label className="text-muted-foreground">Amount to Withdraw</label>
                <span className="text-muted-foreground">
                  Vault Balance: {vaultBalance.toLocaleString()} USDC
                </span>
              </div>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="flex-1 bg-secondary border-border"
                />
                <Button
                  variant="outline"
                  onClick={() => setWithdrawAmount(vaultBalance.toString())}
                  className="border-primary/50 hover:border-primary"
                >
                  Max
                </Button>
              </div>
            </div>

            {withdrawAmount && parseFloat(withdrawAmount) > 0 && (
              <Card className="bg-secondary/50 p-4 space-y-2 border-border/50">
                <h4 className="text-sm font-medium">Transaction Preview</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">You will receive (est.):</span>
                  <span className="font-semibold">{parseFloat(withdrawAmount).toFixed(2)} USDC</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Performance Fee:</span>
                  <span className="font-medium text-warning">
                    {(parseFloat(withdrawAmount) * 0.002).toFixed(2)} USDC (0.2%)
                  </span>
                </div>
              </Card>
            )}

            <Button
              onClick={handleWithdraw}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
            >
              Withdraw USDC
            </Button>
          </TabsContent>
        </Tabs>
      </Card>
    </section>
  );
};
