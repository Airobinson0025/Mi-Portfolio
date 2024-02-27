import "./globals.css";
import Navbar from "./components/Navbar";



export const metadata = {
  title: "Aaron Robinson Web Development Portfolio",
  description: "Web development portfolio for Aaron Robinson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
