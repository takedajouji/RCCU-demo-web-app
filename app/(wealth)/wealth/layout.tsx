import { PropertyShell } from "@/components/layout/PropertyShell";

export default function WealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PropertyShell propertyId="wealth">{children}</PropertyShell>;
}
