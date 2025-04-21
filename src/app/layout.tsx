import "./globals.css";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "X Clone",
  description: "Next.js social media application project",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </QueryProvider>
    </ClerkProvider>
    // <html lang="en">
    //   <body>
    //     <div className="flex justify-between bg-red-300 sm:bg-blue-300 md:bg-green-300">
    //       <div className="">Left</div>
    //       <div className="">{children}</div>
    //       <div className="">Right</div>
    //     </div>
    //   </body>
    // </html>
  );
}