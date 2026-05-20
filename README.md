# Shaan Mirchandani Portfolio Website

This is a beginner-friendly personal portfolio for GitHub Pages. It uses simple static files only, so there are no build tools, npm packages, or external dependencies.

## Customize the Site

Open `site-data.js` first. That is the main file for changing the portfolio in VS Code.

- Edit your name, links, email, About Me text, skills, projects, learning goals, and footer in `site-data.js`.
- Edit colors, spacing, and layout in `styles.css`.
- Edit menu and scroll animations in `script.js` only if you want to change behavior.
- You usually do not need to edit `index.html`.

Your GitHub link is already set to:

```text
https://github.com/shaanmirchandani
```

## Run Locally

You can preview the site by opening `index.html` in your browser.

If you want to run a tiny local server, use:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Add `index.html`, `site-data.js`, `styles.css`, `script.js`, and `README.md` to the repository.
3. Commit and push the files to GitHub.
4. On GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the `/root` folder.
8. Save the settings.

After a minute or two, GitHub will give you a live website link.

## File Structure

```text
.
├── index.html
├── site-data.js
├── styles.css
├── script.js
└── README.md
```

## Notes

- Everything is plain HTML, CSS, and JavaScript.
- The site is responsive and should work on phones, tablets, and desktops.
- The page includes semantic HTML, keyboard-friendly navigation, good color contrast, and reduced-motion support.
