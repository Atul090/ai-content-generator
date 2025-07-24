# AI Content Generator

## Overview

AI Content Generator is a web application built with Next.js that allows users to generate various types of content using AI models. The app provides a collection of templates for different content needs, such as blog titles, blog content, YouTube SEO titles, Instagram posts, code generation, and more. Users can select a template, fill out a form with their input, and receive AI-generated content in a rich text editor format.

## Features

- **Template Library:** Browse and search a wide range of content generation templates.
- **AI-Powered Content:** Uses Google Gemini AI to generate content based on user input and selected template.
- **Rich Text Output:** Results are displayed in a rich text editor, allowing for easy copying and further editing.
- **Authentication:** User authentication is handled via Clerk.
- **Responsive Dashboard:** Modern dashboard layout with sidebar navigation and search functionality.

## Technologies Used

- Next.js (App Router)
- React
- Clerk (Authentication)
- Google Gemini AI (`@google/genai`)
- Tailwind CSS for styling
- Toast UI Editor for rich text editing

## Usage

1. **Sign In/Up:** Authenticate using Clerk.
2. **Browse Templates:** Use the dashboard to browse or search for a template.
3. **Fill Form:** Enter the required information in the form for the selected template.
4. **Generate Content:** Submit the form to receive AI-generated content.
5. **Copy/Use Output:** Copy the generated content for your needs.

## Example Templates

- Blog Title Generator
- Blog Content Generator
- YouTube SEO Title Generator
- Instagram Post Generator
- Code Writer & Explainer
- Tagline Generator
- Product Description Generator

## Getting Started

See [README.md](README.md) for setup