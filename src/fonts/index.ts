import { Anton, Arima, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const anton = Anton({
  subsets: ["latin"],
  weight: ["400", "400"],
  style: ["normal"],
  variable: "--anton",
});

const arima = Arima({
  subsets: ["latin"],
  weight: ["400", "400", "100", "200", "300"],
  variable: "--arima",
});

const fonts = {
  inter,
  anton,
  arima,
};

export default fonts;
