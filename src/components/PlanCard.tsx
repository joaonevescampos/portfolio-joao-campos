import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { socialLinksWhatsAppPlans } from "../utils/links";

type Props = {
  plan: { id: string; image: string };
};

const PlanCard = ({ plan }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  // const title = project.titleKey ? t(project.titleKey, project.title) : project.title
  // const description = project.descriptionKey ? t(project.descriptionKey, project.description) : project.description

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openProject = () => setIsOpen(true);
  const stopCardClick = (event: React.MouseEvent) => event.stopPropagation();
  return (
    <>
      <div
        className="cursor-pointer hover:scale-105 hover:transition-all"
        onClick={openProject}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
          }
        }}
      >
        <img src={plan.image} alt={plan.id} />
      </div>
      {isOpen &&
        createPortal(
          <div
            className="project-modal"
            role="presentation"
            
          >
            <div>
              <button
                type="button"
                className="project-modal-close"
                aria-label={t("projectDetails.close")}
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <img
                src={plan.image}
                alt={plan.id}
                className="md:h-[calc(100vh-120px)] "
              />

              <MagneticButton
                href={`${plan.id === "basic" ? socialLinksWhatsAppPlans[0].href : plan.id === "pro" ? socialLinksWhatsAppPlans[1].href : plan.id === "premium" ? socialLinksWhatsAppPlans[2].href : socialLinksWhatsAppPlans[3].href}`}
                variant="orange"
              >
                Contratar este plano
              </MagneticButton>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default PlanCard;
