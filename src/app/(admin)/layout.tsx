"use client";
import Header from "@/components/common/admin/header/header";
import Headercontent from "@/components/common/admin/headerContent/headercontent";
import SiderBar from "@/components/common/admin/siderbar/SiderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// export const metadata = {
//   title: "Shop Viet",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siderBarData, setSiderBarData] = useState<any>(null);

  // Hàm để cập nhật dữ liệu từ SiderBar
  const updateSiderBarData = (data: any) => {
    setSiderBarData(data);
  };
  return (
    <html lang="en">
      <title>Shop Viet</title>
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body className="container-admin">
        <Header />
        <SiderBar updateSiderBarData={updateSiderBarData}>
          <Headercontent siderBarData={siderBarData} />
          {children}
        </SiderBar>
      </body>
    </html>
  );
}
