import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dennis Diepolder | Fullstack Developer, DevOps & Cloud Expert | AWS Specialist in Switzerland",
  description: "Dennis Diepolder, Fullstack Developer und DevOps Engineer aus der Schweiz mit Spezialisierung auf AWS Cloud-Lösungen. Maßgeschneiderte Lösungen für Webentwicklung, Plattform-Architektur und Cloud-Infrastruktur. Expertenwissen in serverlosen Anwendungen, Containerisierung, CI/CD Automatisierung und Infrastruktur-Skalierung. Innovationstreiber für effiziente und skalierbare digitale Lösungen.",
  keywords: [
    "Dennis Diepolder",
    "Fullstack Developer Schweiz",
    "DevOps Engineer",
    "Cloud Experte AWS",
    "AWS Cloud Lösungen",
    "Serverless Anwendungen",
    "CI/CD Automatisierung",
    "Containerisierung",
    "Cloud Infrastruktur Schweiz",
    "Digitale Lösungen Schweiz",
    "Plattform-Architektur",
    "Webentwicklung Schweiz",
    "Automatisierung Cloud",
    "Effiziente digitale Lösungen",
    "Skalierbare Infrastruktur",
    "Next.js Entwicklung",
    "DynamoDB",
    "Fargate",
    "Serverless AWS",
    "EC2 Bare Metal",
    "Web Services",
    "AWS Amplify",
    "Infrastruktur-Skalierung",
    "Webentwicklung",
    "Digital Transformation",
    "IT Beratung",
    "Software Engineering",
    "DevOps Strategien",
    "Cloud Technologien",
    "Digitale Projekte",
    "Plattform Lösungen",
    "Cloud Architect",
    "Docker Kubernetes",
    "AWS Architektur",
    "DevOps Automatisierung",
    "Serverlos Anwendungen",
    "Frontend Backend Integration",
    "Cloud native Lösungen",
    "Web-Apps",
    "Skalierbare Anwendungen",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
