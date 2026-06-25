import { trustPoints } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-card/40 backdrop-blur-sm">
      <div className="container-px py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-center">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-muted-foreground"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.348 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
