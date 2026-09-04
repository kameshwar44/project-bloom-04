import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Leaf, Menu, Search, ShoppingBag, Sparkles, SunMedium } from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/plant-hero.jpg";
import monsteraImage from "../assets/monstera.jpg";
import birdImage from "../assets/bird-of-paradise.jpg";
import snakeImage from "../assets/snake-plant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant — Plants for Happier Homes" },
      { name: "description", content: "Thoughtfully grown indoor plants, delivered from our greenhouse to your home." },
      { property: "og:title", content: "Verdant — Plants for Happier Homes" },
      { property: "og:description", content: "Thoughtfully grown indoor plants, delivered from our greenhouse to your home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const plants = [
  { name: "Monstera Deliciosa", type: "Easy-going tropical", price: 38, image: monsteraImage },
  { name: "Bird of Paradise", type: "Statement plant", price: 54, image: birdImage },
  { name: "Snake Plant", type: "Low-light favorite", price: 29, image: snakeImage },
];

function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="bg-primary px-4 py-2.5 text-center text-xs font-semibold uppercase text-primary-foreground">
        Free delivery on orders over $75
      </div>
      <header className="relative z-20 border-b border-border bg-background/95">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-2xl font-semibold text-primary" aria-label="Verdant home">
            <Leaf className="size-6" /> Verdant
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-primary" href="#shop">Shop plants</a>
            <a className="transition-colors hover:text-primary" href="#care">Plant care</a>
            <a className="transition-colors hover:text-primary" href="#story">Our story</a>
          </nav>
          <div className="flex items-center gap-1">
            <button className="icon-button hidden sm:inline-flex" type="button" aria-label="Search"><Search className="size-5" /></button>
            <button className="icon-button relative" type="button" aria-label={`Shopping bag with ${cartCount} items`}>
              <ShoppingBag className="size-5" />
              {cartCount > 0 && <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">{cartCount}</span>}
            </button>
            <button className="icon-button md:hidden" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}><Menu className="size-5" /></button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid gap-4 border-t border-border px-5 py-5 text-sm font-medium md:hidden">
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop plants</a>
            <a href="#care" onClick={() => setMenuOpen(false)}>Plant care</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[calc(100svh-7.5rem)] items-center">
        <img src={heroImage} alt="Sunlit living room filled with thriving houseplants" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-primary"><Sparkles className="size-4" /> Grown with care, chosen for you</p>
            <h1 className="text-balance text-5xl leading-[1.02] font-semibold text-foreground sm:text-7xl lg:text-8xl">Bring the outside in.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-foreground/75">Living plants make a room feel alive. Find one that fits your light, your space, and your rhythm.</p>
            <a href="#shop" className="primary-action mt-9">Find your plant <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="section-label">The greenhouse edit</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Plants worth living with</h2></div>
          <a href="#shop" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View all plants <ArrowRight className="size-4" /></a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plants.map((plant) => (
            <article key={plant.name} className="group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={plant.image} alt={`${plant.name} in a ceramic pot`} width={900} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-start justify-between gap-4 pt-5">
                <div><h3 className="text-xl font-semibold">{plant.name}</h3><p className="mt-1 text-sm text-muted-foreground">{plant.type}</p></div>
                <p className="font-semibold">${plant.price}</p>
              </div>
              <button type="button" className="secondary-action mt-4 w-full" onClick={() => setCartCount((count) => count + 1)}>Add to bag</button>
            </article>
          ))}
        </div>
      </section>

      <section id="care" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <div><p className="section-label">No green thumb required</p><h2 className="mt-3 max-w-md text-4xl font-semibold sm:text-5xl">We'll help you keep it thriving.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t border-primary/25 pt-6"><SunMedium className="size-6 text-primary" /><h3 className="mt-5 text-xl font-semibold">Right plant, right place</h3><p className="mt-3 leading-7 text-muted-foreground">Every plant comes with clear light, water, and placement guidance tailored to your home.</p></div>
            <div className="border-t border-primary/25 pt-6"><Leaf className="size-6 text-primary" /><h3 className="mt-5 text-xl font-semibold">Support that keeps growing</h3><p className="mt-3 leading-7 text-muted-foreground">Questions after delivery? Our plant people are here with personal, practical advice.</p></div>
          </div>
        </div>
      </section>

      <footer id="story" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 py-14 sm:flex-row lg:px-8">
          <div><div className="flex items-center gap-2 text-2xl font-semibold"><Leaf className="size-6" /> Verdant</div><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">Small-batch plants grown slowly, packed carefully, and delivered ready to thrive.</p></div>
          <div className="grid grid-cols-2 gap-12 text-sm"><div><p className="font-semibold">Visit</p><p className="mt-3 text-primary-foreground/70">142 Greenhouse Lane<br />Portland, OR</p></div><div><p className="font-semibold">Follow</p><p className="mt-3 text-primary-foreground/70">Instagram<br />Pinterest</p></div></div>
        </div>
      </footer>
    </main>
  );
}