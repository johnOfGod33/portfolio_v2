import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <p className="text-xs font-black tracking-[0.35em] text-sky-500">
          Services
        </p>
        <h1 className="mt-3 max-w-5xl text-4xl font-black uppercase  text-[#0a0a0a] sm:text-5xl lg:text-6xl">
          Engagements shaped like product teams, priced like partnerships.
        </h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-gray-600 sm:text-xl">
          Pick a lane below — each card is a focused collaboration with clear
          deliverables and weekly demos.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
