import { Check, Clock3, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MagneticButton } from "./MagneticButton";
import { socialLinksWhatsAppPlans } from "../utils/links";
import "../styles/index.css";

type Plan = {
  id: string;
  name: string;
  stars: number;
  price: string;
  priceSuffix: string;
  installments?: string;
  description: string;
  included: string[];
  maintenance: string[];
  days: number;
  guarantee?: string;
  exclusiveLabel?: string;
  exclusive?: string[];
};

export default function PricingPlans() {
  const { t } = useTranslation();
  const plans = t("client.plans.items", { returnObjects: true }) as Plan[];

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: "var(--pp-section-bg)",
        color: "var(--pp-section-text)",
      }}
    >
      <div className="mx-auto max-w-360">
        <div className="grid grid-cols-1 items-stretch gap-5 ">
          {plans.map((plan) => {
            const isPremiumPlus = plan.id === "premiumPlus";
            const isPremium = plan.id === "premium";

            const cardBorder = isPremiumPlus
              ? "var(--pp-card-border-premium-plus)"
              : isPremium
                ? "var(--pp-card-border-premium)"
                : "var(--pp-card-border)";

            const cardBackground = isPremiumPlus
              ? "linear-gradient(to bottom, var(--pp-card-gradient-from), var(--pp-card-gradient-to))"
              : "var(--pp-card-bg)";

            return (
              <article
                key={plan.id}
                className="relative rounded-2xl flex min-w-0 flex-col overflow-hidden border p-4 transition duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--pp-card-bg)",
                  backgroundImage: isPremiumPlus ? cardBackground : undefined,
                  borderColor: cardBorder,
                  boxShadow: "var(--pp-card-shadow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--pp-card-hover-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = cardBorder;
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "var(--pp-overlay-gradient)" }}
                />

                {isPremiumPlus && (
                  <span
                    className="absolute right-4 top-4 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: "var(--pp-badge-bg)",
                      borderColor: "var(--pp-badge-border)",
                      color: "var(--pp-badge-text)",
                    }}
                  >
                    {t("client.plans.popular")}
                  </span>
                )}

                <div className="relative flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <h3
                      className={`text-2xl uppercase font-black leading-none tracking-tight sm:text-4xl ${isPremiumPlus && "pt-8"}`}
                    >
                      <span style={{ color: "var(--pp-accent)" }}>Plano</span>
                      <span
                        className="ml-2"
                        style={{ color: "var(--pp-text-primary)" }}
                      >
                        {plan.name}
                      </span>
                    </h3>
                  </div>

                  <div
                    className="mb-5 flex items-center gap-1"
                    aria-label={`${plan.stars} stars`}
                  >
                    {Array.from({ length: plan.stars }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        className="h-4 w-4"
                        style={{
                          fill: "var(--pp-accent-star)",
                          color: "var(--pp-accent-star)",
                        }}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p
                    className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl"
                    style={{ color: "var(--pp-text-primary)" }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="mt-1 text-[11px] font-semibold"
                    style={{ color: "var(--pp-text-muted-soft)" }}
                  >
                    {plan.installments ?? plan.priceSuffix}
                  </p>

                  <p
                    className="mt-5 text-[13px] leading-[1.65]"
                    style={{ color: "var(--pp-text-muted)" }}
                  >
                    {plan.description}
                  </p>

                  {plan.included?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="sr-only">{t("plans.includedLabel")}</h4>
                      <ul className="space-y-2.5">
                        {plan.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5"
                            style={{ color: "var(--pp-text-muted-strong)" }}
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 rounded-full p-0.5"
                              style={{
                                backgroundColor: "var(--pp-accent)",
                                color: "var(--pp-accent-contrast)",
                              }}
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.guarantee && (
                    <p
                      className="mt-4 text-xs leading-5"
                      style={{ color: "var(--pp-text-guarantee)" }}
                    >
                      {plan.guarantee}
                    </p>
                  )}

                  {plan.exclusive?.length && (
                    <div className="mt-5">
                      <h4
                        className="mb-2 text-xs font-bold"
                        style={{ color: "var(--pp-accent)" }}
                      >
                        {plan.exclusiveLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {plan.exclusive.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5"
                            style={{ color: "var(--pp-text-muted-strong)" }}
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 rounded-full p-0.5"
                              style={{
                                backgroundColor: "var(--pp-accent)",
                                color: "var(--pp-accent-contrast)",
                              }}
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div
                    className="mt-6 border-t pt-4"
                    style={{ borderColor: "var(--pp-border-soft)" }}
                  >
                    <h4
                      className="mb-2 text-xs font-bold"
                      style={{ color: "var(--pp-accent)" }}
                    >
                      {t("client.plans.afterDelivery")}
                    </h4>
                    <ul
                      className="space-y-2 text-[11px] leading-[1.6]"
                      style={{ color: "var(--pp-text-muted-soft)" }}
                    >
                      {plan.maintenance.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="relative mt-5 border-t py-4"
                  style={{ borderColor: "var(--pp-border-soft)" }}
                >
                  <p
                    className="text-[11px] font-semibold leading-5"
                    style={{ color: "var(--pp-accent)" }}
                  >
                    {t("client.plans.warning")}
                  </p>

                  <div className="mt-5 flex items-end justify-end max-md:justify-center">
                    
                    <div
                      className="w-full max-w-50 border px-3 py-2.5 text-center"
                      style={{
                        borderColor: "var(--pp-accent)",
                        backgroundColor: "var(--pp-estimate-bg)",
                      }}
                    >
                      <Clock3
                        className="mx-auto mb-1 h-5 w-5"
                        style={{ color: "var(--pp-accent)" }}
                      />
                      <p
                        className="text-[10px]"
                        style={{ color: "var(--pp-text-muted)" }}
                      >
                        {t("client.plans.estimated")}
                      </p>
                      <p
                        className="mt-0.5 text-xl font-semibold leading-none"
                        style={{ color: "var(--pp-accent)" }}
                      >
                        {t("client.plans.days", { count: plan.days })}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mt-2! text-right text-[10px] italic max-md:m-auto max-md:w-fit"
                    style={{ color: "var(--pp-text-faint)" }}
                  >
                    {t("client.plans.mayVary")}
                  </p>
                </div>
                <MagneticButton
                  href={`${plan.id === "basic" ? socialLinksWhatsAppPlans[0].href : plan.id === "pro" ? socialLinksWhatsAppPlans[1].href : plan.id === "premium" ? socialLinksWhatsAppPlans[2].href : socialLinksWhatsAppPlans[3].href}`}
                  variant="orange"
                >
                  Contratar este plano
                </MagneticButton>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}