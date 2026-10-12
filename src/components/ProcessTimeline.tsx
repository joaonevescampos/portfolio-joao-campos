import React from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  CreditCard,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

// Tipagem das etapas
interface Step {
  id: number;
  icon: React.ElementType;
  key: string;
}

const STEPS: Step[] = [
  { id: 1, icon: FileText, key: "step1" },
  { id: 2, icon: CreditCard, key: "step2" },
  { id: 3, icon: Code2, key: "step3" },
  { id: 4, icon: CheckCircle2, key: "step4" },
  { id: 5, icon: Rocket, key: "step5" },
];

export const ProcessTimeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-[var(--color-bg-dark)] text-[var(--color-text-primary)] transition-colors duration-300"
      id="process"
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4 font-display">
            {t("client.process.title")}
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            {t("client.process.subtitle")}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Linha vertical central (Desktop) / Esquerda (Mobile) */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-line)] transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Lado do Texto */}
                  <div
                    className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-line)] shadow-sm hover:border-[var(--color-accent)] transition-colors duration-300 group">
                      <div
                        className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}
                      >
                        <span className="text-[var(--color-accent)] font-mono text-sm font-bold">
                          0{step.id}
                        </span>
                        <h3 className="text-xl font-semibold">
                          {t(`client.process.${step.key}.title`)}
                        </h3>
                      </div>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {t(`client.process.${step.key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Nó Central (Ícone) */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-bg-dark)] border-2 border-[var(--color-accent)] flex items-center justify-center shadow-[0_0_30px_var(--color-accent-glow)] shadow-amber-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                  </div>

                  {/* Espaçador para o layout flex (Desktop) */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
