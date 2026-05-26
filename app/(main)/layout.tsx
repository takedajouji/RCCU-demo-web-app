import { PropertyShell } from "@/components/layout/PropertyShell";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PropertyShell propertyId="main">{children}</PropertyShell>;
}
