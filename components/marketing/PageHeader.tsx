type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--accent-muted)]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-lg text-[var(--muted-foreground)]">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
