/*
  Site behavior for Shaan's portfolio.
  Edit site-data.js for portfolio content. Edit this file only for behavior.
*/

const data = portfolioData;

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, href) {
  document.querySelectorAll(selector).forEach((element) => {
    element.href = href;
  });
}

function createExternalLink(label, href) {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = href;

  if (href !== "#") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderContent() {
  document.title = `${data.name} | ${data.title}`;
  document.querySelector("meta[name='description']").content =
    `${data.name} is a ${data.age}-year-old developer building websites, games, and creative coding projects.`;

  setText("[data-site='name']", data.name);
  setText("[data-site='initials']", data.initials);
  setText("[data-site='eyebrow']", data.eyebrow);
  setText("[data-site='title']", data.title);
  setText("[data-site='tagline']", data.tagline);
  setText("[data-site='currentlyBuilding']", data.currentlyBuilding);
  setText("[data-site='aboutHeading']", data.aboutHeading);
  setText("[data-site='skillsHeading']", data.skillsHeading);
  setText("[data-site='skillsSubtitle']", data.skillsSubtitle);
  setText("[data-site='projectsHeading']", data.projectsHeading);
  setText("[data-site='projectsSubtitle']", data.projectsSubtitle);
  setText("[data-site='learningHeading']", data.learningHeading);
  setText("[data-site='contactHeading']", data.contactHeading);
  setText("[data-site='contactText']", data.contactText);
  setText("[data-site='footerText']", data.footerText);
  setLink("[data-site='githubLink']", data.githubUrl);

  document.querySelector(".brand").setAttribute("aria-label", `${data.name} home`);
  document.querySelector("[data-site='avatar']").alt = `Abstract developer avatar for ${data.name}`;

  renderAbout();
  renderStats();
  renderSkills();
  renderProjects();
  renderLearning();
  renderContactLinks();
}

function renderAbout() {
  const about = document.querySelector("[data-render='about']");
  about.innerHTML = "";

  data.aboutParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    about.append(p);
  });
}

function renderStats() {
  const stats = document.querySelector("[data-render='stats']");
  stats.innerHTML = "";

  data.stats.forEach((stat) => {
    const item = document.createElement("div");
    item.innerHTML = `<strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span>`;
    stats.append(item);
  });
}

function renderSkills() {
  const skills = document.querySelector("[data-render='skills']");
  skills.innerHTML = "";

  data.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.dataset.level = skill.level;
    card.innerHTML = `
      <div class="skill-top">
        <h3>${escapeHtml(skill.name)}</h3>
        <span>${escapeHtml(skill.level)}%</span>
      </div>
      <div class="progress-track" aria-label="${escapeHtml(skill.name)} skill level ${escapeHtml(skill.level)} percent">
        <div class="progress-fill"></div>
      </div>
    `;
    skills.append(card);
  });
}

function renderProjects() {
  const projects = document.querySelector("[data-render='projects']");
  projects.innerHTML = "";

  data.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    const number = String(index + 1).padStart(2, "0");
    const tags = project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("");

    card.innerHTML = `
      <div class="project-topline">
        <span class="project-number">${number}</span>
        <span class="project-status">${escapeHtml(project.status)}</span>
      </div>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <ul class="tag-list" aria-label="Technologies used for ${escapeHtml(project.name)}">
        ${tags}
      </ul>
      <div class="project-links"></div>
    `;

    const links = card.querySelector(".project-links");
    links.append(createExternalLink("GitHub", project.github));
    links.append(createExternalLink("Live Demo", project.demo));
    projects.append(card);
  });
}

function renderLearning() {
  const learning = document.querySelector("[data-render='learning']");
  learning.innerHTML = "";

  data.learningGoals.forEach((goal, index) => {
    const card = document.createElement("article");
    card.className = "learning-card reveal";
    card.innerHTML = `
      <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(goal.name)}</h3>
      <p>${escapeHtml(goal.description)}</p>
    `;
    learning.append(card);
  });
}

function renderContactLinks() {
  const contactLinks = document.querySelector("[data-render='contactLinks']");
  contactLinks.innerHTML = "";

  const emailLink = document.createElement("a");
  emailLink.className = "button button-primary";
  emailLink.href = `mailto:${data.email}`;
  emailLink.textContent = "Email Shaan";

  const githubLink = createExternalLink("GitHub", data.githubUrl);
  githubLink.className = "button button-secondary";

  const discordLink = document.createElement("a");
  discordLink.className = "button button-secondary";
  discordLink.href = "#";
  discordLink.textContent = `Discord: ${data.discord}`;

  contactLinks.append(emailLink, githubLink, discordLink);
}

function setupMenu() {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    }
  });
}

function setupScrollAnimations() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        if (entry.target.classList.contains("skill-card")) {
          const level = entry.target.dataset.level || "0";
          const fill = entry.target.querySelector(".progress-fill");
          fill.style.width = `${level}%`;
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

renderContent();
setupMenu();
setupScrollAnimations();
