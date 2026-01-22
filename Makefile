.PHONY: install serve build clean help

# Default target
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies using uv"
	@echo "  make serve    - Start local development server"
	@echo "  make build    - Build the site"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make help     - Show this help message"

# Install dependencies
install:
	uv sync

# Serve locally
serve:
	uv run mkdocs serve

# Build site
build:
	uv run mkdocs build

build-serve:
	uv run mkdocs build
	uv run mkdocs serve

# Clean build artifacts
clean:
	rm -rf site/
	rm -rf .cache/

