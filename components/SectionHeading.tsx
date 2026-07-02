export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
