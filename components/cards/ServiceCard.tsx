import { Check } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const isFeatured = Boolean(service.featured);

  return (
    <Card
      className={`relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100/30 ${
        isFeatured ? "border-sky-400 shadow-md" : ""
      }`}
    >
      {service.badge ? (
        <div className="absolute right-0 top-0">
          <Badge
            variant="accent"
            className="rounded-none border-0 bg-sky-400 text-white"
          >
            {service.badge}
          </Badge>
        </div>
      ) : null}
      <CardHeader className={`gap-2 ${service.badge ? "pr-24" : ""}`}>
        <CardTitle className="text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>
        <ul className="space-y-2 text-sm text-[#0a0a0a]">
          {service.points.map((point) => (
            <li key={point} className="flex gap-2">
              <Check
                className="mt-0.5 size-4 shrink-0 text-sky-500"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={isFeatured ? "default" : "outline"}
          className="w-full rounded-none"
          asChild
        >
          <Link href="/contact">Get started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
