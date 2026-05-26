import { PropertyShell } from "@/components/layout/PropertyShell";

export default function MortgageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PropertyShell propertyId="mortgage">{children}</PropertyShell>;
}
