import { useMemo, useState } from "react";
import { Link } from "react-router";

import {
  ArrowRight,
  ChevronDown,
  ArrowDown,
} from "lucide-react";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { architectureProjects } from "../../../data/architectureProjects";

import "./ArchitectureProjects.css";

const filters = [
  "Todos",
  "Viviendas",
  "Refugios",
  "Interiorismo",
];

export default function ArchitectureProjects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [sort, setSort] = useState("recent");
  const [visibleCount, setVisibleCount] = useState(9);

  /* ========================================
     FILTER + SORT
  ======================================== */

  const filteredProjects = useMemo(() => {
    let result = [...architectureProjects];

    /* FILTER */

    if (activeFilter === "Viviendas") {
      result = result.filter(
        (project) => project.category === "Vivienda"
      );
    }

    if (activeFilter === "Refugios") {
      result = result.filter(
        (project) => project.category === "Refugio"
      );
    }

    if (activeFilter === "Interiorismo") {
      result = result.filter(
        (project) => project.category === "Interiorismo"
      );
    }

    /* SORT */

    result.sort((a, b) => {
      if (sort === "recent") {
        /*
          Si todavía no tenemos año en alguno de los proyectos,
          lo mandamos al final.
        */
        return (b.year ?? 0) - (a.year ?? 0);
      }

      if (sort === "oldest") {
        /*
          Los proyectos sin año también quedan al final.
        */
        if (!a.year && !b.year) return 0;
        if (!a.year) return 1;
        if (!b.year) return -1;

        return a.year - b.year;
      }

      if (sort === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

    return result;
  }, [activeFilter, sort]);

  /* ========================================
     VISIBLE PROJECTS
  ======================================== */

  const visibleProjects = filteredProjects.slice(
    0,
    visibleCount
  );

  return (
    <main className="projects-page">
      <Navbar variant="full" />

      {/* ========================================
          HERO
      ======================================== */}

      <section className="projects-hero">
        <div className="projects-hero__copy">
          <span className="projects-eyebrow">
            Arquitectura / Proyectos
          </span>

          <h1>
            Proyectos de
            <br />
            arquitectura
          </h1>

          <div className="projects-small-line" />

          <p>
            Obras construidas con una mirada integral del lugar,
            la luz y las personas. Cada proyecto es el resultado
            de escuchar, entender y diseñar espacios que mejoran
            la vida.
          </p>
        </div>

        <div className="projects-hero__image">
          <img
            src="/images/projects/projects-hero.png"
            alt="Arquitectura residencial en el sur de Chile"
          />
        </div>
      </section>

      {/* ========================================
          FILTERS
      ======================================== */}

      <section className="projects-controls">
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? "projects-filter projects-filter--active"
                  : "projects-filter"
              }
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(9);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SORT */}

        <div className="projects-sort">
          <span>Ordenar por:</span>

          <label>
            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
            >
              <option value="recent">
                Más recientes
              </option>

              <option value="oldest">
                Más antiguos
              </option>

              <option value="name">
                Nombre
              </option>
            </select>

            <ChevronDown strokeWidth={1.2} />
          </label>
        </div>
      </section>

      {/* ========================================
          GRID
      ======================================== */}

      <section className="projects-grid-section">
        {visibleProjects.length > 0 ? (
          <>
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>

            {/* LOAD MORE */}

            {visibleCount < filteredProjects.length && (
              <button
                type="button"
                className="projects-load-more"
                onClick={() =>
                  setVisibleCount(
                    (current) => current + 6
                  )
                }
              >
                Cargar más proyectos

                <ArrowDown strokeWidth={1.2} />
              </button>
            )}
          </>
        ) : (
          <div className="projects-empty">
            <p>
              No hay proyectos disponibles en esta categoría.
            </p>
          </div>
        )}
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="projects-cta">
        <h2>
          ¿Tienes un proyecto
          <br />
          en mente?
        </h2>

        <p>
          Cuéntanos sobre tu terreno, tu proyecto
          <br />
          y cómo imaginas habitarlo.
          <br />
          Te ayudamos a hacerlo realidad.
        </p>

        <Link
          to="/contacto"
          className="projects-cta__button"
        >
          Conversemos

          <ArrowRight strokeWidth={1.1} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}


/* ========================================
   PROJECT CARD
======================================== */

function ProjectCard({ project }) {
  return (
    <Link
      to={`/arquitectura/proyectos/${project.slug}`}
      className="project-card"
    >
      {/* IMAGE */}

      <div className="project-card__image">
        <img
          src={project.cover}
          alt={project.name}
        />
      </div>

      {/* CONTENT */}

      <div className="project-card__content">
        <span className="project-card__category">
          {project.category}
        </span>

        <h2>
          {project.name}
        </h2>

        {project.location && (
          <p>
            {project.location}
          </p>
        )}

        {/* FOOTER */}

        <div className="project-card__footer">
          <span className="project-card__meta">
            {project.area && (
              <span>
                {project.area}
              </span>
            )}

            {project.area && project.year && (
              <span className="project-card__dot">
                ·
              </span>
            )}

            {project.year && (
              <span>
                {project.year}
              </span>
            )}
          </span>

          <ArrowRight strokeWidth={1.1} />
        </div>
      </div>
    </Link>
  );
}