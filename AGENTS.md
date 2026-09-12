# AGENTS.md — reactapp2

Context for AI coding agents (Claude Code, Codex, opencode, Cursor, …) working in this repo.
Read this first; keep it current.

## What this is
A throwaway CodeSandbox React starter (Create React App / `react-scripts`), parked since Feb
2023. The entire app is one component with four buttons that call API Gateway paths
(`mfarestrict`, `ec2`, `waf`, `test`) which kick off infrastructure provisioning — a demo UI
for a `reactapp2` provisioning API, not a product.

## Layout
- `src/App.js` — the app: a hardcoded `apiEndpoint` plus the four `fetch()` buttons.
- `src/index.js` — React 18 `createRoot` bootstrap; `src/styles.css` — trivial styles.
- `public/index.html` — CRA HTML template.
- `package.json` — react/react-dom 18.2.0, react-scripts 4.0.0; scripts `start`/`build`/`test`/`eject`.
- `.codesandbox/workspace.json` — CodeSandbox preview breakpoints; `.vs/` — committed Visual Studio IDE state (not source).

## Commands
- `npm install` then `npm start` — CRA dev server.
- `npm run build` — production build.
- `npm test` — react-scripts test runner (jest via `--env=jsdom`).
- No lint config and no CI in this repo.

## Conventions
- Experimental scratch app; no established conventions. Use a feature branch + PR rather than pushing to `main` directly.
- Frontend only: do not add the API endpoint's backing infrastructure here.

## Gotchas
- `src/App.js` hardcodes a live API Gateway URL (`https://fetpttl8n4.execute-api.us-east-1.amazonaws.com/`) and shows `alert("Please wait 5 minutes for launch!")` — clicking a button triggers real infrastructure provisioning. Be careful when running or testing.
- `react-scripts` 4.0.0 paired with React 18.2.0 is a known-bad combination (CRA 4 targets React 17); expect `npm run build` trouble until react-scripts is bumped to 5.
- `.vs/` (Visual Studio state, incl. `slnx.sqlite` and `.vsidx` indexes) is committed. It isn't source; don't extend it. Commits here have throwaway messages ("asdasd", "dfgsdfg").
