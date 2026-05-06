"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "./user/signin" || pathname === "./user/signup";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}