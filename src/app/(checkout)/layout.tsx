import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Shop Viet",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body className="container">{children}</body>
    </html>
  );
}
