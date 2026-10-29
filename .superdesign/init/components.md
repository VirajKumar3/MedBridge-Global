# Existing component source

## `src/components/navbar.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-5xl">
      <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-white/70 backdrop-blur-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-white/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#FFB7B2] flex items-center justify-center shadow-sm"><div className="w-2 h-2 rounded-full bg-white" /></div>
          <span className="font-semibold text-[15px] tracking-tight text-[#292524] hidden sm:block">MedBridge Global</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#78716C]">
          <Link href="/treatments">Treatments</Link><Link href="/hospitals">Hospitals</Link><Link href="/how-it-works">Journey</Link><Link href="/about">Story</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden sm:block text-[14px] font-medium text-[#78716C] px-2">Login</Link>
          <Button onClick={() => router.push('/ai-care-match')} className="rounded-full bg-[#292524] text-white text-[14px] font-medium px-6 py-5">Start Match</Button>
        </div>
      </nav>
    </div>
  );
}
```

`usePathname` is currently imported but not used. It is retained as existing code and is not part of the landing design scope.
