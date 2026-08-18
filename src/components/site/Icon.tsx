import {
  Boxes,
  Building2,
  Code2,
  Compass,
  Layers,
  LifeBuoy,
  Palette,
  PenTool,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Boxes,
  Building2,
  Code2,
  Compass,
  Layers,
  LifeBuoy,
  Palette,
  PenTool,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
