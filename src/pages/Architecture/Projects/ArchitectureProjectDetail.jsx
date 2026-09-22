// src/pages/Architecture/Projects/ArchitectureProjectDetail.jsx

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link, useParams } from "react-router";

import {
  ArrowLeft,
  ArrowRight,
  Grid2X2,
  Share2,
  Sun,
  Mountain,
  Leaf,
} from "lucide-react";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import { architectureProjects } from "../../../data/architectureProjects";

import "./ArchitectureProjectDetail.css";

export default function ArchitectureProjectDetail() {
  const { slug } = useParams();

  const projectIndex = architectureProjects.findIndex(
    (item) => item.slug === slug
  );

  const project =
    projectIndex >= 0
      ? architectureProjects[projectIndex]
      : null;

  const previousProject =
    projectIndex > 0
      ? architectureProjects[projectIndex - 1]
      : architectureProjects[architectureProjects.length - 1];

  const nextProject =
    projectIndex >= 0 &&
    projectIndex < architectureProjects.length - 1
      ? architectureProjects[projectIndex + 1]
      : architectureProjects[0];

  const galleryImages = useMemo(() => {
    if (!project) return [];

    if (project.images?.length) {
      return project.images;
    }

    return project.cover ? [project.cover] : [];
  }, [project]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  /* =========================================================
     THUMBNAIL CAROUSEL
  ========================================================= */

  const thumbnailsViewportRef = useRef(null);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    const viewport = thumbnailsViewportRef.current;
    const activeThumbnail =
      thumbnailRefs.current[activeImageIndex];

    if (!viewport || !activeThumbnail) return;

    const viewportRect =
      viewport.getBoundingClientRect();

    const thumbnailRect =
      activeThumbnail.getBoundingClientRect();

    const isOutsideLeft =
      thumbnailRect.left < viewportRect.left;

    const isOutsideRight =
      thumbnailRect.right > viewportRect.right;

    if (isOutsideLeft || isOutsideRight) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeImageIndex]);

  /* =========================================================
     PROJECT NOT FOUND
  ========================================================= */

  if (!project) {
    return (
      <main className="project-detail-page">
        <Navbar variant="full" />

        <section className="project-detail__not-found">
          <span className="project-detail__eyebrow">
            Arquitectura / Proyectos
          </span>

          <h1>
            Proyecto
            <br />
            no encontrado.
          </h1>

          <Link
            to="/arquitectura/proyectos"
            className="project-detail__back"
          >
            <ArrowLeft strokeWidth={1.1} />
            Volver a proyectos
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  /* =========================================================
     PROJECT DATA
  ========================================================= */

  const activeImage =
    galleryImages[activeImageIndex] || project.cover;

  const hasTechnicalData =
    project.location ||
    project.year ||
    project.area ||
    project.commission ||
    project.status ||
    project.photography;

  const hasConcept =
    project.concept?.title ||
    project.concept?.description ||
    project.principles?.length > 0;

  /* =========================================================
     GALLERY CONTROLS
  ========================================================= */

  const goPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
  };

  const goNextImage = () => {
    setActiveImageIndex((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <main className="project-detail-page">
      <Navbar variant="full" />

      {/* ========================================
          HERO / PROJECT INFO
      ======================================== */}

      <section className="project-detail__hero">
        <aside className="project-detail__sidebar">

          <Link
            to="/arquitectura/proyectos"
            className="project-detail__back"
          >
            <ArrowLeft strokeWidth={1.1} />
            Volver a proyectos
          </Link>

          <h1>{project.name}</h1>

          <div className="project-detail__small-line" />

          {project.type && (
            <h2>{project.type}</h2>
          )}

          {project.description && (
            <p className="project-detail__description">
              {project.description}
            </p>
          )}

          {/* ========================================
              TECHNICAL DATA
          ======================================== */}

          {hasTechnicalData && (
            <dl className="project-detail__technical">

              {project.location && (
                <>
                  <dt>Ubicación</dt>
                  <dd>{project.location}</dd>
                </>
              )}

              {project.year && (
                <>
                  <dt>Año</dt>
                  <dd>{project.year}</dd>
                </>
              )}

              {project.area && (
                <>
                  <dt>Superficie</dt>
                  <dd>{project.area}</dd>
                </>
              )}

              {project.commission && (
                <>
                  <dt>Tipo de encargo</dt>
                  <dd>{project.commission}</dd>
                </>
              )}

              {project.status && (
                <>
                  <dt>Estado</dt>
                  <dd>{project.status}</dd>
                </>
              )}

              {project.photography && (
                <>
                  <dt>Fotografía</dt>
                  <dd>{project.photography}</dd>
                </>
              )}

            </dl>
          )}

          {/* ========================================
              SHARE
          ======================================== */}

          <button
            type="button"
            className="project-detail__share"
          >
            <Share2 strokeWidth={1.1} />
            Compartir proyecto
          </button>

          {/* ========================================
              THUMBNAIL GALLERY
          ======================================== */}

          {galleryImages.length > 1 && (
            <div className="project-detail__thumbs">

              <div
                className="project-detail__thumb-viewport"
                ref={thumbnailsViewportRef}
              >
                <div className="project-detail__thumb-list">

                  {galleryImages.map((image, index) => (
                    <button
                      type="button"
                      key={`${project.slug}-${index}`}
                      ref={(element) => {
                        thumbnailRefs.current[index] = element;
                      }}
                      className={
                        activeImageIndex === index
                          ? "project-detail__thumb project-detail__thumb--active"
                          : "project-detail__thumb"
                      }
                      onClick={() =>
                        setActiveImageIndex(index)
                      }
                      aria-label={`Ver imagen ${
                        index + 1
                      } de ${galleryImages.length}`}
                    >
                      <img
                        src={image}
                        alt={`${project.name} ${
                          index + 1
                        }`}
                      />
                    </button>
                  ))}

                </div>
              </div>

              {/* ========================================
                  COUNTER + ARROWS
              ======================================== */}

              <div className="project-detail__counter">

                <button
                  type="button"
                  className="project-detail__thumb-arrow"
                  onClick={goPreviousImage}
                  aria-label="Imagen anterior"
                >
                  <ArrowLeft strokeWidth={1.1} />
                </button>

                <span>
                  {String(
                    activeImageIndex + 1
                  ).padStart(2, "0")}

                  {" / "}

                  {String(
                    galleryImages.length
                  ).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  className="project-detail__thumb-arrow"
                  onClick={goNextImage}
                  aria-label="Imagen siguiente"
                >
                  <ArrowRight strokeWidth={1.1} />
                </button>

              </div>

            </div>
          )}

        </aside>

        {/* ========================================
            MAIN IMAGE
        ======================================== */}

        <div className="project-detail__visual">
          <div className="project-detail__main-image">
            <img
              src={activeImage}
              alt={`${project.name} ${
                activeImageIndex + 1
              }`}
            />
          </div>
        </div>

      </section>

      {/* ========================================
          EL PROYECTO
      ======================================== */}

      {hasConcept && (
        <section className="project-detail__concept">

          <div className="project-detail__concept-copy">

            <span className="project-detail__eyebrow">
              {project.concept?.eyebrow || "El proyecto"}
            </span>

            <div className="project-detail__small-line" />

            {project.concept?.title && (
              <h2>
                {project.concept.title}
              </h2>
            )}

            {project.concept?.description && (
              <p>
                {project.concept.description}
              </p>
            )}

          </div>

          {project.principles?.length > 0 && (
            <div className="project-detail__principles">

              {project.principles.map(
                (principle, index) => {

                  const PrincipleIcon =
                    index === 0
                      ? Sun
                      : index === 1
                      ? Mountain
                      : Leaf;

                  return (
                    <article
                      key={`${project.slug}-${principle.title}`}
                    >

                      <PrincipleIcon
                        strokeWidth={1}
                      />

                      <h3>
                        {principle.title}
                      </h3>

                      <p>
                        {principle.description}
                      </p>

                    </article>
                  );
                }
              )}

            </div>
          )}

          {project.sketch && (
            <div className="project-detail__concept-sketch">

              <img
                src={project.sketch}
                alt={`Croquis de ${project.name}`}
              />

            </div>
          )}

        </section>
      )}

      {/* ========================================
          PLANOS
      ======================================== */}

      {project.plans?.length > 0 && (
        <section className="project-detail__plans">

          {/* COLUMNA IZQUIERDA */}
          <div className="project-detail__plans-copy">

            <span className="project-detail__eyebrow">
              Planos y materialidad
            </span>

            <div className="project-detail__small-line" />

            {/* MATERIALIDAD */}
            {project.materials?.length > 0 && (
              <div className="project-detail__plans-materials">

                {project.materials.map((material) => (
                  <div
                    className="project-detail__plans-material"
                    key={`${project.slug}-${material.name}`}
                  >
                    <span className="project-detail__plans-material-name">
                      {material.name}
                    </span>

                    <p>
                      {material.description}
                    </p>
                  </div>
                ))}

              </div>
            )}

          </div>


          {/* COLUMNA DERECHA — PLANOS */}
          <div className="project-detail__plans-grid">

            {project.plans.map((plan) => (
              <figure
                key={`${project.slug}-${plan.name}`}
              >

                <div className="project-detail__plan-image">

                  <img
                    src={plan.image}
                    alt={plan.name}
                  />

                </div>

                <figcaption>
                  {plan.name}
                </figcaption>

              </figure>
            ))}

          </div>

        </section>
      )}
      {/* ========================================
          PROJECT NAVIGATION
      ======================================== */}

      <nav className="project-detail__navigation">

        {previousProject && (
          <Link
            to={`/arquitectura/proyectos/${previousProject.slug}`}
            className="project-detail__navigation-project"
          >

            <ArrowLeft strokeWidth={1.1} />

            <div>
              <span>
                Proyecto anterior
              </span>

              <strong>
                {previousProject.name}
              </strong>
            </div>

          </Link>
        )}

        <Link
          to="/arquitectura/proyectos"
          className="project-detail__navigation-all"
        >

          <Grid2X2 strokeWidth={1} />

          <span>
            Ver todos los proyectos
          </span>

        </Link>

        {nextProject && (
          <Link
            to={`/arquitectura/proyectos/${nextProject.slug}`}
            className="project-detail__navigation-project project-detail__navigation-project--next"
          >

            <div>
              <span>
                Siguiente proyecto
              </span>

              <strong>
                {nextProject.name}
              </strong>
            </div>

            <ArrowRight strokeWidth={1.1} />

          </Link>
        )}

      </nav>

      <Footer />

    </main>
  );
}