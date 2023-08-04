import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-full flex-1 mx-auto custom-container">{children}</main>
      <Footer />
    </div>
  );
}
