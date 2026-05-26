import { getProperty, type PropertyId } from "@/content/properties";
import { PropertyFooter } from "@/components/layout/PropertyFooter";
import { PropertyHeader } from "@/components/layout/PropertyHeader";
import { SiteAlert } from "@/components/layout/SiteAlert";

type PropertyShellProps = {
  propertyId: PropertyId;
  children: React.ReactNode;
};

export function PropertyShell({ propertyId, children }: PropertyShellProps) {
  const property = getProperty(propertyId);

  return (
    <div data-property={propertyId} className="flex min-h-full flex-1 flex-col">
      <SiteAlert />
      <PropertyHeader property={property} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <PropertyFooter property={property} />
    </div>
  );
}
