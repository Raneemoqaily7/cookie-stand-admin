# Lab: Welcome to React, Next.js & TailwindCSS
##  Overview
React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a Cookie Stand Admin app using Next.js and style using Tailwind CSS.

## Feature Tasks and Requirements
- The spec for lab is screen shot of Cookie Stand Admin Version 1
pages/Index.js should…
- Have <Head> component with page title set to Cookie Stand Admin
- Have a header component that matches spec.
- Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.
- Have a <footer> component that matches spec.
- Style app using TailwindCSS utility classes.
## Implementation Notes
- Follow Install Tailwind CSS with Next.js steps.
- NOTE: name your app cookie-stand-admin instead of my-project
- Strip out unused files
- Won’t break if they get left in, but a good practice to remove stuff you’re not using.
- Pro tip: Tailwind CSS Extension Pack
## User Acceptance Tests
No testing required.

## Configuration
- Create cookie-stand-admin repository in Github

- Use the folder created by create-next-app as the root of your project’s git repository.















# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
