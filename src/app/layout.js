import "./globals.css";
import AppLayout from "./app-layout"

export const metadata = {
  title: "Lim Shau Hong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html >
  );
}
