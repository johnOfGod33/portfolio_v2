import { careerEntries } from "@/lib/data/career";

export function Career() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.35em] text-sky-500">
              Career
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase  text-[#0a0a0a] sm:text-4xl lg:text-5xl">
              Where I shipped
            </h2>
          </div>
          <p className="max-w-2xl text-base text-gray-600">
            A horizontal slice of recent roles — each stop sharpened product
            sense and platform discipline.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-full gap-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {careerEntries.map((entry, index) => (
              <article
                key={entry.id}
                className="min-w-[280px] shrink-0 border border-gray-200 bg-[#f7f7f7] p-5 shadow-sm transition-colors hover:border-sky-400 md:min-w-0"
              >
                <p className="text-[10px] font-black tracking-widest text-sky-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-black leading-tight text-[#0a0a0a]">
                  {entry.role}
                </h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-gray-600">
                  {entry.company}
                </p>
                <p className="mt-2 text-xs font-semibold text-sky-600">
                  {entry.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
