import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { projectGroups } from "../services/portfolioData";
import { socialLinks } from "../utils/links";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import clientBackground from "../assets/video/background-client.mp4";
import basic from "../assets/img/plans/basic.png";
import pro from "../assets/img/plans/pro.png";
import premium from "../assets/img/plans/premium.png";
import premiumPlus from "../assets/img/plans/premium-plus.png";
import PlanCard from "../components/PlanCard";
import profilePhoto from "../assets/img/perfil-portfolio.png";

const featuredProjects = projectGroups[0].projects;

const plans = [
  { id: "basic", image: basic },
  { id: "pro", image: pro },
  { id: "premium", image: premium },
  { id: "premiumPlus", image: premiumPlus },
];

export function Client() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHeroTitleComplete, setIsHeroTitleComplete] = useState(false);
  useDocumentTitle("João Campos | Sites sob medida");

  const stats = [
    { value: t("stats.experience.value"), label: t("stats.experience.label") },
    { value: t("stats.projects.value"), label: t("stats.projects.label") },
    { value: t("stats.stack.value"), label: t("stats.stack.label") },
  ];
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 0.4;
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <main className="client-page">
      <section id="top" className="client-hero">
        <Link className="hero-home-back" to="/">
          ← HOME
        </Link>
        <video
          ref={videoRef}
          className="client-hero-video"
          src={clientBackground}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = 0.4;
          }}
        />
        <div className="client-hero-video-shade" />
        <div className="client-hero-grid" />
        <div className="client-hero-content">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="client-eyebrow"
          >
            {t("client.eyebrow")}
          </motion.p>
          <h1>
            <TypeAnimation
              sequence={[t("client.title"), () => setIsHeroTitleComplete(true)]}
              speed={5}
              cursor={false}
              wrapper="span"
            />
          </h1>
          <motion.p
            className="client-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={
              isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {t("client.subtitle")}
          </motion.p>
          <motion.div
            className="client-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={
              isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              className="client-cta client-cta-dark"
              href={socialLinks.find((link) => link.label === "WhatsApp")?.href}
              target="_blank"
              rel="noreferrer"
            >
              {t("client.cta")}
            </a>
            <a className="client-cta client-cta-outline" href="#projects">
              {t("client.projectsCta")}
            </a>
          </motion.div>
        </div>
        <div className="client-hero-note">{t("client.note")}</div>
      </section>

      <motion.section
        id="about"
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="m-auto max-w-300 px-4 md:py-12 py-28">
          <div className="flex flex-col gap-2">
            <div className="section-kicker">{t("about.kicker")}</div>
            <div className="section-heading">
              <div className="flex flex-col gap-4 ">
                <h2>{t("about.title")}</h2>
                <p>{t("about.description")}</p>
              </div>
              <h1 className="text-2xl font-semibold leading-[0.95] tracking-[-0.07em] text-wite md:text-4xl">
                <TypeAnimation
                  sequence={[
                    t("hero.title"),
                    () => setIsHeroTitleComplete(true),
                  ]}
                  speed={5}
                  cursor={false}
                  wrapper="span"
                />
              </h1>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img
                src={profilePhoto}
                alt="João Campos"
                className="photo-frame h-[540px] w-full rounded-[2rem] border border-[var(--border)] object-top! shadow-[0_25px_80px_var(--shadow)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6 text-base leading-8 text-[var(--muted)]"
            >
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </motion.div>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-8 pt-12 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hero-copy max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isHeroTitleComplete
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-200"
                >
                  {t("hero.ctaPrimary")}
                </a>
                {/* <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-200"
                >
                  {t("hero.ctaSecondary")}
                </a> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isHeroTitleComplete
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.18 + index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="projects" className="client-section">
        <div className="client-section-heading">
          <p className="client-eyebrow">{t("client.projectsEyebrow")}</p>
          <h2>{t("client.projectsTitle")}</h2>
          <p>{t("client.projectsDescription")}</p>
        </div>
        <div className="client-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="plans" className="client-section">
        <div className="client-section-heading">
          <p className="client-eyebrow">{t("client.plansEyebrow")}</p>
          <h2>{t("client.plansTitle")}</h2>
          <p>{t("client.plansDescription")}</p>
        </div>
        <div className="client-project-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about2" className="client-about">
        <div className="client-about-flex">
          <div>
            <p className="client-eyebrow">{t("client.aboutEyebrow")}</p>
            <h2>{t("client.aboutTitle")}</h2>
          </div>
          <div className="client-about-copy">
            <p>{t("about.paragraph4")}</p>
            <a
              className="client-cta client-cta-dark"
              href={socialLinks.find((link) => link.label === "WhatsApp")?.href}
              target="_blank"
              rel="noreferrer"
            >
              {t("client.aboutCta")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
