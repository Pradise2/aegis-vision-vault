import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const isActive = (path: string) => location.pathname === path;

  const connectWallet = () => {
    // Mock wallet connection
    const mockAddress = "0x742d...4c89";
    setWalletAddress(mockAddress);
    setIsWalletConnected(true);
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setIsWalletConnected(false);
  };

  const navLinks = [
    { path: "/", label: "Dashboard" },
    { path: "/analytics", label: "Analytics" },
    { path: "/governance", label: "Governance" },
    { path: "/docs", label: "Docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="AegisYield Logo" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold gradient-text hidden sm:inline-block">AegisYield</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Wallet Connection & Theme Toggle */}
          <div className="flex items-center gap-4">
            {isWalletConnected ? (
              <Button
                variant="outline"
                onClick={disconnectWallet}
                className="hidden sm:flex items-center gap-2 border-primary/50 hover:border-primary"
              >
                <Wallet className="h-4 w-4" />
                <span className="text-sm">{walletAddress}</span>
              </Button>
            ) : (
              <Button
                onClick={connectWallet}
                className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </Button>
            )}

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isWalletConnected ? (
                <Button
                  variant="outline"
                  onClick={disconnectWallet}
                  className="flex items-center gap-2 border-primary/50 hover:border-primary"
                >
                  <Wallet className="h-4 w-4" />
                  <span className="text-sm">{walletAddress}</span>
                </Button>
              ) : (
                <Button
                  onClick={connectWallet}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                >
                  <Wallet className="h-4 w-4" />
                  <span>Connect Wallet</span>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};