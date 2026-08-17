import {
  Building2,
  Code2,
  LifeBuoy,
  PenTool,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Building2,
  Code2,
  LifeBuoy,
  PenTool,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
