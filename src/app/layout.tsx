import "./globals.css";
import LeftBar from "@/components/Leftbar";
import RightBar from "@/components/Rightbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between mx-auto">
          <div className="px-2 h-screen xsm:px-4 xxl-px-8 bg-red-400 ">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-100 h-screen bg-blue-400">
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1 h-screen bg-yellow-400">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
