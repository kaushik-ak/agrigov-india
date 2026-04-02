import "../styles/globals.css";

export const metadata = {
  title: "AgriGov India",
  description: "Agriculture Platform for Indian Farmers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}