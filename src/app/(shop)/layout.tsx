import Header from "@/components/common/header";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/common/footer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Shop Viet",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body>
        <Header />
        <div className="children-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
