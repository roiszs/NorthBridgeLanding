// ProyectoNorthBridgeLanding.jsx
import React, { useState } from "react";

const translations = {
  es: {
    langLabel: "ES",
    altLangLabel: "EN",
    navbar: {
      home: "Inicio",
      services: "Servicios",
      approach: "Enfoque",
      results: "Resultados",
      contact: "Contacto",
    },
    hero: {
      badge: "Estrategia de negocios & Transformación digital",
      title: "Conectamos tu estrategia de negocio con soluciones digitales que sí ejecutan.",
      subtitle:
        "NorthBridge Consulting ayuda a PyMEs y empresas en crecimiento a alinear sus objetivos con proyectos de transformación digital medibles y accionables.",
      primaryCta: "Agendar una llamada",
      secondaryCta: "Ver servicios",
    },
    services: {
      label: "Servicios",
      title: "Lo que hacemos",
      items: [
        {
          title: "Estrategia de negocios",
          desc: "Analizamos tu modelo actual, tus números y tu contexto competitivo para diseñar un plan claro de crecimiento.",
        },
        {
          title: "Transformación digital",
          desc: "Seleccionamos e implementamos herramientas digitales que conectan procesos, equipos y clientes en un solo ecosistema.",
        },
        {
          title: "Acompañamiento ejecutivo",
          desc: "Trabajamos de la mano con dirección o founders para aterrizar decisiones estratégicas y darles seguimiento.",
        },
      ],
    },
    approach: {
      label: "Enfoque",
      title: "Nuestro enfoque",
      steps: [
        {
          title: "1. Diagnóstico claro",
          desc: "Entendemos tu situación actual, tus métricas y tus objetivos para evitar proyectos sin rumbo.",
        },
        {
          title: "2. Estrategia accionable",
          desc: "Diseñamos un roadmap simple, priorizado y con responsables definidos.",
        },
        {
          title: "3. Implementación y seguimiento",
          desc: "Te acompañamos en la ejecución y medimos resultados para seguir optimizando.",
        },
      ],
    },
    results: {
      label: "Resultados",
      title: "Resultados que importan",
      disclaimer:
        "Cifras basadas en proyectos reales y escenarios simulados para ilustrar el tipo de impacto que buscamos.",
      metrics: [
        { value: "+32%", label: "Productividad de equipo en 6 meses" },
        { value: "-18%", label: "Tiempos muertos operativos" },
        { value: "+24%", label: "Conversión de leads a clientes" },
      ],
    },
    testimonials: {
      label: "Testimonios",
      title: "Lo que dicen nuestros clientes",
      items: [
        {
          quote:
            "NorthBridge nos ayudó a clarificar nuestra estrategia y a priorizar proyectos digitales con impacto real en el negocio.",
          name: "Directora General",
          role: "PyME de servicios B2B",
        },
        {
          quote:
            "Pasamos de tener procesos dispersos en hojas de cálculo a un sistema integrado con indicadores claros semana a semana.",
          name: "COO",
          role: "Empresa industrial mediana",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Listo para dar el siguiente paso?",
      subtitle:
        "Cuéntanos sobre tu empresa y agendemos una llamada introductoria sin costo.",
      form: {
        name: "Nombre",
        company: "Empresa",
        email: "Correo electrónico",
        message: "Mensaje / ¿Qué reto quieres resolver?",
        submit: "Enviar mensaje",
        note: "Respondemos normalmente en menos de 24 horas.",
      },
    },
    footer: {
      text: "© " + new Date().getFullYear() + " NorthBridge Consulting. Todos los derechos reservados.",
    },
  },
  en: {
    langLabel: "EN",
    altLangLabel: "ES",
    navbar: {
      home: "Home",
      services: "Services",
      approach: "Approach",
      results: "Results",
      contact: "Contact",
    },
    hero: {
      badge: "Business Strategy & Digital Transformation",
      title: "We turn your business strategy into smart digital execution.",
      subtitle:
        "NorthBridge Consulting helps SMBs and growing companies align their goals with digital transformation projects that deliver measurable outcomes.",
      primaryCta: "Schedule a call",
      secondaryCta: "View services",
    },
    services: {
      label: "Services",
      title: "What we do",
      items: [
        {
          title: "Business strategy",
          desc: "We analyze your current model, numbers, and competitive context to design a clear growth plan.",
        },
        {
          title: "Digital transformation",
          desc: "We select and implement digital tools that connect processes, teams, and customers in one ecosystem.",
        },
        {
          title: "Executive advisory",
          desc: "We work closely with leadership or founders to turn strategic decisions into concrete initiatives.",
        },
      ],
    },
    approach: {
      label: "Approach",
      title: "Our approach",
      steps: [
        {
          title: "1. Clear assessment",
          desc: "We understand your current situation, key metrics, and goals to avoid directionless projects.",
        },
        {
          title: "2. Actionable strategy",
          desc: "We design a simple, prioritized roadmap with clear ownership.",
        },
        {
          title: "3. Implementation & follow-up",
          desc: "We support execution and track outcomes to keep improving.",
        },
      ],
    },
    results: {
      label: "Results",
      title: "Results that matter",
      disclaimer:
        "Figures based on real projects and simulated scenarios to illustrate the type of impact we aim for.",
      metrics: [
        { value: "+32%", label: "Team productivity in 6 months" },
        { value: "-18%", label: "Operational downtime" },
        { value: "+24%", label: "Lead-to-customer conversion rate" },
      ],
    },
    testimonials: {
      label: "Testimonials",
      title: "What our clients say",
      items: [
        {
          quote:
            "NorthBridge helped us clarify our strategy and prioritize digital projects with real business impact.",
          name: "Managing Director",
          role: "B2B services company",
        },
        {
          quote:
            "We moved from scattered spreadsheets to an integrated system with clear weekly KPIs.",
          name: "COO",
          role: "Mid-sized industrial company",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Ready for your next step?",
      subtitle:
        "Tell us about your company and let’s schedule a free introductory call.",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Message / What challenge do you want to solve?",
        submit: "Send message",
        note: "We typically reply within 24 hours.",
      },
    },
    footer: {
      text: "© " + new Date().getFullYear() + " NorthBridge Consulting. All rights reserved.",
    },
  },
};

const NorthBridgeLanding = () => {
    const [lang, setLang] = useState("es");
  const [mobileOpen, setMobileOpen] = useState(false); // 👈 NUEVO

  const t = translations[lang];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false); // 👈 cerrar menú al dar click
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podemos integrar EmailJS, un backend, etc.
    alert(
      lang === "es"
        ? "Gracias por tu mensaje. Te contactaremos pronto."
        : "Thank you for your message. We’ll get back to you soon."
    );
  };

    return (
    <div className="nb-root">
      {/* HEADER */}
      <header className="nb-header">
        <div className="nb-container nb-header-inner">
          <div
            className="nb-logo"
            onClick={() => handleScrollTo("home")}
            role="button"
          >
            <span className="nb-logo-mark">NB</span>
            <div className="nb-logo-text">
              <span className="nb-logo-title">NorthBridge</span>
              <span className="nb-logo-subtitle">Consulting</span>
            </div>
          </div>

          {/* NAV ESCRITORIO */}
          <nav className="nb-nav nb-nav-desktop">
            <button onClick={() => handleScrollTo("home")}>
              {t.navbar.home}
            </button>
            <button onClick={() => handleScrollTo("services")}>
              {t.navbar.services}
            </button>
            <button onClick={() => handleScrollTo("approach")}>
              {t.navbar.approach}
            </button>
            <button onClick={() => handleScrollTo("results")}>
              {t.navbar.results}
            </button>
            <button onClick={() => handleScrollTo("contact")}>
              {t.navbar.contact}
            </button>
          </nav>

          {/* ACCIONES ESCRITORIO */}
          <div className="nb-header-actions nb-header-actions-desktop">
            <div className="nb-lang-toggle">
              <button
                className={lang === "es" ? "active" : ""}
                onClick={() => setLang("es")}
              >
                ES
              </button>
              <span className="nb-lang-divider">/</span>
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            <button
              className="nb-cta-header"
              onClick={() => handleScrollTo("contact")}
            >
              {t.hero.primaryCta}
            </button>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            className="nb-mobile-menu-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="nb-mobile-menu-icon">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL */}
        {mobileOpen && (
          <div className="nb-nav-mobile">
            <nav>
              <button onClick={() => handleScrollTo("home")}>
                {t.navbar.home}
              </button>
              <button onClick={() => handleScrollTo("services")}>
                {t.navbar.services}
              </button>
              <button onClick={() => handleScrollTo("approach")}>
                {t.navbar.approach}
              </button>
              <button onClick={() => handleScrollTo("results")}>
                {t.navbar.results}
              </button>
              <button onClick={() => handleScrollTo("contact")}>
                {t.navbar.contact}
              </button>
            </nav>
            <div className="nb-nav-mobile-footer">
              <div className="nb-lang-toggle">
                <button
                  className={lang === "es" ? "active" : ""}
                  onClick={() => setLang("es")}
                >
                  ES
                </button>
                <span className="nb-lang-divider">/</span>
                <button
                  className={lang === "en" ? "active" : ""}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
              <button
                className="nb-btn nb-btn-primary nb-btn-mobile-cta"
                onClick={() => handleScrollTo("contact")}
              >
                {t.hero.primaryCta}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="nb-main" id="home" lang={lang}>
        {/* HERO */}
        <section className="nb-section nb-hero">
          <div className="nb-container nb-hero-grid">
            <div className="nb-hero-content">
              <div className="nb-hero-badge">{t.hero.badge}</div>
              <h1 className="nb-hero-title">{t.hero.title}</h1>
              <p className="nb-hero-subtitle">{t.hero.subtitle}</p>
              <div className="nb-hero-actions">
                <button
                  className="nb-btn nb-btn-primary"
                  onClick={() => handleScrollTo("contact")}
                >
                  {t.hero.primaryCta}
                </button>
                <button
                  className="nb-btn nb-btn-ghost"
                  onClick={() => handleScrollTo("services")}
                >
                  {t.hero.secondaryCta}
                </button>
              </div>
            </div>
            <div className="nb-hero-card">
              <div className="nb-hero-card-inner">
                <p className="nb-hero-card-label">
                  {lang === "es"
                    ? "Visibilidad completa del negocio"
                    : "Full business visibility"}
                </p>
                <h3 className="nb-hero-card-title">
                  {lang === "es"
                    ? "Tableros, procesos y decisiones en un solo puente."
                    : "Dashboards, processes, and decisions on a single bridge."}
                </h3>
                <div className="nb-hero-metrics">
                  <div>
                    <span className="nb-hero-metric-value">+32%</span>
                    <span className="nb-hero-metric-label">
                      {lang === "es" ? "Productividad" : "Productivity"}
                    </span>
                  </div>
                  <div>
                    <span className="nb-hero-metric-value">-18%</span>
                    <span className="nb-hero-metric-label">
                      {lang === "es" ? "Tiempos muertos" : "Downtime"}
                    </span>
                  </div>
                  <div>
                    <span className="nb-hero-metric-value">+24%</span>
                    <span className="nb-hero-metric-label">
                      {lang === "es" ? "Conversión" : "Conversion"}
                    </span>
                  </div>
                </div>
                <p className="nb-hero-card-footnote">
                  {lang === "es"
                    ? "Ejemplo de resultados promedio en proyectos de 6–12 meses."
                    : "Example of average outcomes in 6–12 month projects."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="nb-section" id="services">
          <div className="nb-container">
            <div className="nb-section-header">
              <span className="nb-section-label">{t.services.label}</span>
              <h2 className="nb-section-title">{t.services.title}</h2>
            </div>
            <div className="nb-grid-3">
              {t.services.items.map((item, idx) => (
                <article key={idx} className="nb-card nb-card-soft">
                  <h3 className="nb-card-title">{item.title}</h3>
                  <p className="nb-card-text">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="nb-section nb-section-alt" id="approach">
          <div className="nb-container">
            <div className="nb-section-header">
              <span className="nb-section-label">{t.approach.label}</span>
              <h2 className="nb-section-title">{t.approach.title}</h2>
            </div>
            <div className="nb-steps">
              {t.approach.steps.map((step, idx) => (
                <div key={idx} className="nb-step">
                  <div className="nb-step-number">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="nb-step-title">{step.title}</h3>
                    <p className="nb-step-text">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="nb-section" id="results">
          <div className="nb-container">
            <div className="nb-section-header">
              <span className="nb-section-label">{t.results.label}</span>
              <h2 className="nb-section-title">{t.results.title}</h2>
            </div>
            <div className="nb-metrics-grid">
              {t.results.metrics.map((metric, idx) => (
                <div key={idx} className="nb-metric-card">
                  <div className="nb-metric-value">{metric.value}</div>
                  <div className="nb-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
            <p className="nb-section-disclaimer">{t.results.disclaimer}</p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="nb-section nb-section-alt">
          <div className="nb-container">
            <div className="nb-section-header">
              <span className="nb-section-label">
                {t.testimonials.label}
              </span>
              <h2 className="nb-section-title">{t.testimonials.title}</h2>
            </div>
            <div className="nb-grid-2">
              {t.testimonials.items.map((item, idx) => (
                <figure key={idx} className="nb-testimonial">
                  <p className="nb-testimonial-quote">“{item.quote}”</p>
                  <figcaption className="nb-testimonial-meta">
                    <span className="nb-testimonial-name">{item.name}</span>
                    <span className="nb-testimonial-role">{item.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="nb-section" id="contact">
          <div className="nb-container nb-contact-grid">
            <div>
              <span className="nb-section-label">{t.contact.label}</span>
              <h2 className="nb-section-title">{t.contact.title}</h2>
              <p className="nb-contact-subtitle">{t.contact.subtitle}</p>
              <p className="nb-contact-note">{t.contact.form.note}</p>
            </div>

            <form className="nb-contact-form" onSubmit={handleSubmit}>
              <div className="nb-form-group">
                <label>{t.contact.form.name}</label>
                <input type="text" required />
              </div>
              <div className="nb-form-group">
                <label>{t.contact.form.company}</label>
                <input type="text" />
              </div>
              <div className="nb-form-group">
                <label>{t.contact.form.email}</label>
                <input type="email" required />
              </div>
              <div className="nb-form-group">
                <label>{t.contact.form.message}</label>
                <textarea rows="4" required />
              </div>
              <button type="submit" className="nb-btn nb-btn-primary nb-btn-full">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="nb-footer">
        <div className="nb-container">
          <p>{t.footer.text}</p>
        </div>
      </footer>
    </div>
  );
};

export default NorthBridgeLanding;
