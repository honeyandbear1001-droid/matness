import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      )}
      <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.08] sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-lg leading-relaxed text-muted-foreground ${
            center ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
