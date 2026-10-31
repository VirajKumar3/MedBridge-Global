# Shared layout sources

## Root layout — `src/app/layout.tsx`

```tsx
<html lang="en">
  <body className={`${outfit.variable} ${reenieBeanie.variable} font-outfit antialiased min-h-screen flex flex-col bg-background text-foreground`}>
    <div className="noise-overlay">…</div>
    <Navbar />
    <main className="flex-1 flex flex-col pt-28">{children}</main>
    <footer>…existing multi-column site footer…</footer>
  </body>
</html>
```

**Layout behavior:** Global navigation is fixed at the top. Every page begins below it with `pt-28`. The footer is shared and is out of scope for this landing-page brief. `Outfit` and `Reenie Beanie` are loaded in the root layout and must remain unchanged.

## Landing page layout — `src/app/page.tsx`

```tsx
<div className="flex flex-col min-h-screen pt-4 pb-20 space-y-32 overflow-x-hidden">
  <section>Hero with eyebrow, heading, description, and action pair</section>
  <section>Common journeys horizontal scroller</section>
  <section>Product experience preview</section>
  <section>Patient reflections</section>
  <section>Waitlist conversion</section>
</div>
```

**Layout behavior:** Content is centre-led on desktop. Journey cards scroll horizontally. CTA buttons stack on small screens. The redesign should keep a clear responsive path and avoid horizontal overflow outside the intentional journey scroller.
