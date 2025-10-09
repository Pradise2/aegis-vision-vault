import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { GitCommit, GitBranch, Star, Folder, FileText } from "lucide-react";

const fileStructure = [
  { name: "public", type: "dir" },
  { name: "src", type: "dir" },
  { name: "README.md", type: "file" },
  { name: "components.json", type: "file" },
  { name: "eslint.config.js", type: "file" },
  { name: "index.html", type: "file" },
  { name: "package.json", type: "file" },
  { name: "postcss.config.js", type: "file" },
  { name: "tailwind.config.ts", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "vite.config.ts", type: "file" },
];

const Repository = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-8">
        {/* Repo Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">aegis-vision-vault</h1>
          <p className="text-muted-foreground">
            AI-powered DeFi vault for maximizing yield.
          </p>
        </div>

        {/* Repo Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="glass-card p-4 rounded-lg">
            <GitCommit className="h-6 w-6 mx-auto text-primary mb-1" />
            <span className="text-sm font-semibold">124</span>
            <p className="text-xs text-muted-foreground">Commits</p>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <GitBranch className="h-6 w-6 mx-auto text-primary mb-1" />
            <span className="text-sm font-semibold">3</span>
            <p className="text-xs text-muted-foreground">Branches</p>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <Star className="h-6 w-6 mx-auto text-primary mb-1" />
            <span className="text-sm font-semibold">58</span>
            <p className="text-xs text-muted-foreground">Stars</p>
          </div>
        </div>

        {/* File Explorer */}
        <Card className="glass-card">
          <div className="p-4 border-b border-border/50">
            <h3 className="font-semibold">Project Root</h3>
          </div>
          <ul className="divide-y divide-border/50">
            {fileStructure.map((item, index) => (
              <li key={index} className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer">
                {item.type === "dir" ? (
                  <Folder className="h-5 w-5 text-primary" />
                ) : (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                )}
                <span className="flex-1 font-mono text-sm">{item.name}</span>
                <span className="text-xs text-muted-foreground">Latest commit</span>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default Repository;
