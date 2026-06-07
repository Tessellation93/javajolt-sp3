# JavaJolt Frontend

A React single page application for a coding learning platform. Users register and log in, browse a catalog of programming courses, open a course to see its lessons, and track their own lesson completion. Admin users can also create, edit and delete courses. Built as the 3rd semester frontend portfolio project at CPH Business Academy.

**Live app:** https://javajolt.dk

**Portfolio and reflections:** https://www.javajolt.dk

**Backend API repo:** https://github.com/Tessellation93/JavaJolt

## Test user

The app is behind JWT authentication. Log in with this account (USER and ADMIN, so admin features are visible):

    Email:    tessexam@javajolt.com
    Password: test1234

## Tech stack

React, Vite, React Router, React hooks (useState and useEffect), JWT in localStorage, CSS Modules, REST via fetch with a Bearer token. Hosted with Caddy on a DigitalOcean droplet, HTTPS via Let's Encrypt.

## Features

Authentication: register and log in. The JWT is stored in localStorage and sent as a Bearer token on every request.

Protected routes: every page except login and register requires a token, otherwise the user is redirected to /login.

Course catalog: list courses, filter by difficulty (server side) and by language (client side, case insensitive).

Course detail: single course and its lessons via sub routing (/courses/:id). Lesson completion is tracked in localStorage with a progress bar.

Admin role gating: create, edit and delete only render for users whose roles include ADMIN.

Dashboard: catalog overview with course counts per difficulty.

UX: loading spinners, error messages, and a 404 Not Found page.

## Running locally

    npm install
    npm run dev      (dev server on localhost:5173)
    npm run build    (production build into dist/)

The frontend talks to the backend API at /api, which Caddy reverse proxies to the Java backend on the same domain.
