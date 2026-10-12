import { Check, Clock3, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MagneticButton } from "./MagneticButton";
import { socialLinksWhatsAppPlans } from "../utils/links";

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
    <section className="relative isolate overflow-hidden bg-[#101010] px-4 text-white sm:px-6 lg:px-8 lg:py-24">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,80,24,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,80,24,0.10),transparent_40%)]"
      /> */}

      <div className="mx-auto max-w-360">
        {/* <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ff5722] sm:text-sm">
            {t("client.plans.eyebrow")}
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t("client.plans.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
            {t("client.plans.description")}
          </p>
        </header> */}

        <div className="grid grid-cols-1 items-stretch gap-5 ">
          {plans.map((plan) => {
            const isPremiumPlus = plan.id === "premiumPlus";
            const isPremium = plan.id === "premium";

            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl flex min-w-0 flex-col overflow-hidden border bg-[#1c1c1c] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#ff5722]/70 sm:p-6 ${
                  isPremiumPlus
                    ? "border-[#ff5722]/60 bg-gradient-to-b from-[#2b1b17] to-[#191919]"
                    : isPremium
                      ? "border-white/15"
                      : "border-white/10"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,87,34,0.07),transparent_38%,transparent)]"
                />

                {isPremiumPlus && (
                  <span className="absolute right-4 top-4 rounded-full border border-[#ff5722]/40 bg-[#ff5722]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ff7043]">
                    {t("client.plans.popular")}
                  </span>
                )}

                <div className="relative flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <h3 className={`text-4xl! uppercase font-black leading-none tracking-tight sm:text-[26px] ${isPremiumPlus && "pt-8"}`}>
                      <span className="text-[#ff5722]">Plano</span>
                      <span className="ml-2 text-white">{plan.name}</span>
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
                        className="h-4 w-4 fill-[#ffc857] text-[#ffc857]"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-white/65">
                    {plan.installments ?? plan.priceSuffix}
                  </p>

                  <p className="mt-5 text-[13px] leading-[1.65] text-white/70">
                    {plan.description}
                  </p>

                  {plan.included?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="sr-only">{t("plans.includedLabel")}</h4>
                      <ul className="space-y-2.5">
                        {plan.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5 text-white/85"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-[#ff5722] p-0.5 text-black"
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.guarantee && (
                    <p className="mt-4 text-xs leading-5 text-white/75">
                      {plan.guarantee}
                    </p>
                  )}

                  {plan.exclusive?.length && (
                    <div className="mt-5">
                      <h4 className="mb-2 text-xs font-bold text-[#ff5722]">
                        {plan.exclusiveLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {plan.exclusive.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5 text-white/85"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-[#ff5722] p-0.5 text-black"
                              strokeWidth={3}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <h4 className="mb-2 text-xs font-bold text-[#ff5722]">
                      {t("client.plans.afterDelivery")}
                    </h4>
                    <ul className="space-y-2 text-[11px] leading-[1.6] text-white/65">
                      {plan.maintenance.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative mt-5 border-t border-white/10 py-4">
                  <p className="text-[11px] font-semibold leading-5 text-[#ff5722]">
                    {t("client.plans.warning")}
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-3">
                    <p className="text-[10px] italic text-white/40">
                      @joaocampos_digital
                    </p>
                    <div className="shrink-0 border border-[#ff5722]/70 bg-[#ff5722]/[0.07] px-3 py-2.5 text-center">
                      <Clock3 className="mx-auto mb-1 h-5 w-5 text-[#ff5722]" />
                      <p className="text-[10px] text-white/70">
                        {t("client.plans.estimated")}
                      </p>
                      <p className="mt-0.5 text-xl font-semibold leading-none text-[#ff5722]">
                        {t("client.plans.days", { count: plan.days })}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-right text-[10px] italic text-white/40">
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
