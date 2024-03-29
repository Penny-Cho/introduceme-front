import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ClientWrapper from "./modules/ClientWrapper";

export const metadata = {
  title: "Introduce Me",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ClientWrapper>{children}</ClientWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
