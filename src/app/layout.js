import "./global.css";
import { Fira_Code, Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import NextTopLoader from "nextjs-toploader";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-firacode",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${firacode.variable} font-nunito`}
    >
      <body>
        <AuthContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <NextTopLoader
              showSpinner={false}
              color="hsl(262.1 83.3% 57.8%)"
              height={4}
            />
            {children}
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
