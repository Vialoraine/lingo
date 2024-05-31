import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = { children: React.ReactNode };

const MarketingLayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default MarketingLayout;
