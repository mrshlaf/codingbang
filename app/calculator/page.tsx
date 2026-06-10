import { CalculatorClient } from "@/components/calculator-client";

export const metadata = {
  title: "Kalkulator Harga",
  description: "Hitung estimasi biaya pembuatan website sesuai kebutuhan Anda. Transparan dan gratis.",
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
