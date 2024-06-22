import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <DesignerContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen">
            <main className="flex w-full flex-grow">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </DesignerContextProvider>
    </ClerkProvider>
  );
}
