type SectionHeadingProps = {
  children: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  children,
  align = "center",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-4xl font-extrabold leading-tight text-white sm:text-5xl ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {children}
    </h2>
  );
}
