import { createContext, useContext, type ReactNode } from "react";
import { COPY, type Copy, type Locale } from "@/lib/portfolio";

type LocaleValue = { locale: Locale; copy: Copy };

const LocaleContext = createContext<LocaleValue>({ locale: "ko", copy: COPY.ko });

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, copy: COPY[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useCopy() {
  return useContext(LocaleContext);
}
