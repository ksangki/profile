import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { Writing } from "@/components/writing";
import { LocaleProvider } from "@/lib/locale";
import type { Locale } from "@/lib/portfolio";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
