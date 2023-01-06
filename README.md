# Edinburgh Indie Gamers

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2da8adf-e497-458d-92b9-f44639617996/deploy-status)](https://app.netlify.com/sites/edinburgh-indie-gamers/deploys)

## Deployment

The live Edinburgh Indie Gamers website is deployed at [www.edinburghindiegamers.com](www.edinburghindiegamers.com).

### Deploy Locally

You can deploy the site locally in a Node environment:

```bash
# Clone repository from GitHub

$ gh repo clone empowermint/edinburgh-indie-gamers

# Install dependencies

$ npm install

# Start development server

$ npm run dev

```

## Technologies

The website is built using:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MDX](https://mdxjs.com/)
- [Netlify](https://netlify.com/)

### Why Next?

I chose Next.js for this site because I wanted to take advantage of its smart bundling and hybrid static/server rendering to achieve optimal performance out of the box. (The Lighthouse scores are 99% Performance, 100% Accessibility, 92% Best Practices and 96% SEO.)

As this is a marketing website with no user inputs or content, most pages are statically rendered in order to increase search-engine visibility.

### Why Netlify?

Netlify's no-config-required CI workflow and CDN network made it an obvious choice for this mostly static website. I knew that its serverless functions and other more powerful features could be employed if needed for future features.

### Why MDX?

The content of this site is not updated frequently, so I didn't need the overhead of implementing a CMS. The simplicity of MDX makes static pages easy to maintain, while its interoperability with JSX and React components makes it extensible in the very few cases where a more advanced functionality is required.
