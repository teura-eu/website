# TEURA Website

Static website for TEURA sp. z o.o. built with MkDocs and Material theme.

## Tech Stack

- **Static Site Generator**: [MkDocs](https://www.mkdocs.org/)
- **Theme**: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- **i18n Plugin**: [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n)
- **Dependency Management**: [uv](https://github.com/astral-sh/uv)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
.
├── docs/
│   ├── index.md     # Polish content (default, served at root /)
│   ├── offer.md     # Polish pages
│   ├── team.md
│   ├── contact.md
│   ├── en/          # English translations (served at /en/)
│   │   ├── index.md
│   │   ├── offer.md
│   │   ├── team.md
│   │   └── contact.md
│   └── assets/      # Static assets (images, logos, etc.)
├── mkdocs.yml       # MkDocs configuration
├── pyproject.toml   # Python dependencies (uv source of truth)
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment workflow
```

## Prerequisites

- Python 3.9 or higher
- [uv](https://github.com/astral-sh/uv) package manager

### Installing uv

On Linux/macOS:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

On Windows (PowerShell):
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Or using pip:
```bash
pip install uv
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/TEURA/website.git
cd website
```

2. Install dependencies:
```bash
uv sync
```

This will install all required dependencies from `pyproject.toml` into a virtual environment managed by uv.

## Development

### Serve Locally

Start the local development server:

```bash
uv run mkdocs serve
```

Or use the Makefile:
```bash
make serve
```

The site will be available at `http://127.0.0.1:8000/`

### Build Site

Build the static site:

```bash
uv run mkdocs build
```

Or use the Makefile:
```bash
make build
```

The output will be in the `site/` directory.

### Clean Build Artifacts

Remove build artifacts:

```bash
make clean
```

## Content Structure

The website supports two languages:

- **Polish (pl)**: Default language, served at root `/`
- **English (en)**: Translation, served at `/en/`

Content pages are located in:
- `docs/` - Polish content (default language, served at root)
- `docs/en/` - English translations (served at /en/)

Pages:
- `index.md` - Home page
- `offer.md` - Offer/Services page
- `team.md` - Team page
- `contact.md` - Contact page
- `location.md` - Location page
- `privacy.md` - Privacy Policy page

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow (`.github/workflows/deploy.yml`):
1. Checks out the repository
2. Sets up Python
3. Installs uv
4. Installs dependencies using `uv sync`
5. Builds the MkDocs site using `uv run mkdocs build`
6. Deploys to GitHub Pages

### GitHub Repository Settings

To enable GitHub Pages deployment:

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions" (not "Deploy from a branch")
3. Ensure the repository is public (required for GitHub Pages free tier)

The site will be available at: `https://teura.eu` (after DNS configuration)

## Configuration

Main configuration is in `mkdocs.yml`:

- Site name, URL, and description
- Theme settings (Material)
- i18n plugin configuration (mkdocs-static-i18n)
- Navigation structure
- Plugins and markdown extensions

## Commands Reference

| Command | Description |
|---------|-------------|
| `uv sync` | Install/update dependencies |
| `uv run mkdocs serve` | Start development server |
| `uv run mkdocs build` | Build static site |
| `make install` | Install dependencies (Makefile) |
| `make serve` | Start development server (Makefile) |
| `make build` | Build site (Makefile) |
| `make clean` | Clean build artifacts |

## Notes

- All configuration and comments are in English
- Content is in Polish (default) with English translations
- No external tracking scripts included by default
- No backend required - pure static site
- Legal placeholders in footer and privacy policy require legal review

## License

Copyright © 2024 TEURA sp. z o.o. All rights reserved.
