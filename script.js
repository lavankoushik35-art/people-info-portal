
/* =====================================
   PEOPLE INFO — PREMIUM DESIGN SYSTEM
   ===================================== */

:root {
  --bg: #090b16;
  --surface: #14182a;
  --surface-light: #1b2036;
  --primary: #9568ff;
  --secondary: #4baaff;
  --text: #f5f3ff;
  --muted: #a4acc5;
  --border: rgba(255, 255, 255, 0.10);
  --glow: rgba(149, 104, 255, 0.25);
  --radius: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background:
    radial-gradient(
      ellipse at 10% 0%,
      rgba(90, 35, 160, 0.28),
      transparent 42%
    ),
    radial-gradient(
      ellipse at 100% 100%,
      rgba(20, 95, 160, 0.20),
      transparent 40%
    ),
    var(--bg);
  line-height: 1.6;
  overflow-x: hidden;
}

/* PREMIUM HEADER */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 6%;
  background: rgba(9, 11, 22, 0.78);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 21px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.logo span {
  color: var(--primary);
  text-shadow: 0 0 22px var(--glow);
}

header a {
  text-decoration: none;
}

/* LINKS AND BUTTONS */

a {
  color: #cbb8ff;
  transition: color 0.25s ease;
}

a:hover {
  color: #ffffff;
}

button {
  font: inherit;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 13px 20px;
  font-weight: 700;
  background: linear-gradient(
    110deg,
    #8250ec,
    #477bff
  );
  box-shadow: 0 7px 25px rgba(130, 80, 236, 0.24);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(130, 80, 236, 0.38);
  filter: brightness(1.1);
}

button:active {
  transform: scale(0.98);
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 3px;
}

/* PAGE LAYOUT */

main {
  width: min(850px, 92%);
  margin: 65px auto 45px;
}

section {
  margin-bottom: 25px;
}

h1 {
  font-size: clamp(32px, 7vw, 60px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

h2 {
  font-size: clamp(20px, 4vw, 28px);
  margin-bottom: 12px;
}

p {
  color: var(--muted);
}

/* GRADIENT TEXT */

.gradient-text,
h1 span {
  background: linear-gradient(
    100deg,
    #c3a6ff,
    #63d5ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* GLASS CARDS */

.panel,
.search-card,
.card {
  background: rgba(20, 24, 42, 0.86);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.20),
    inset 0 1px rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.panel:hover,
.card:hover {
  border-color: rgba(149, 104, 255, 0.32);
}

/* SEARCH FORM */

.search-row {
  display: flex;
  align-items: stretch;
  gap: 10px;
}

input,
textarea,
select {
  width: 100%;
  min-width: 0;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  outline: none;
  background: #090b16;
  color: var(--text);
  font: inherit;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #727b96;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(149, 104, 255, 0.13);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

label {
  display: block;
  margin: 15px 0 8px;
  color: #d8d5ed;
  font-size: 13px;
}

/* SEARCH RESULTS */

#results {
  margin-top: 20px;
}

.result-card {
  padding: 20px;
  margin-top: 12px;
  border-radius: 15px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.035);
  overflow-wrap: anywhere;
  animation: fadeUp 0.35s ease both;
}

.result-card h3 {
  color: #cbb8ff;
  margin-bottom: 10px;
}

.result-card p {
  line-height: 1.8;
  font-size: 14px;
}

.status,
.message {
  padding: 15px;
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.035);
  color: var(--muted);
  overflow-wrap: anywhere;
}

/* ADMIN DASHBOARD */

.admin-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.admin-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.secondary {
  background: var(--surface-light);
  border: 1px solid var(--border);
  box-shadow: none;
}

.danger {
  background: linear-gradient(110deg, #a62f4d, #e04f63);
  box-shadow: none;
}

.hidden {
  display: none !important;
}

/* BADGES */

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid rgba(149, 104, 255, 0.3);
  border-radius: 30px;
  color: #cbb8ff;
  background: rgba(149, 104, 255, 0.10);
  font-size: 11px;
}

/* LOADING ANIMATION */

.loader {
  width: 25px;
  height: 25px;
  border: 3px solid rgba(255, 255, 255, 0.12);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 15px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* FOOTER */

footer {
  padding: 25px 15px;
  text-align: center;
  border-top: 1px solid var(--border);
  color: #777f99;
  font-size: 12px;
}

/* MOBILE RESPONSIVE */

@media (max-width: 600px) {
  header {
    padding: 16px 5%;
  }

  .logo {
    font-size: 17px;
  }

  main {
    margin-top: 42px;
  }

  .panel,
  .search-card,
  .card {
    padding: 17px;
  }

  .search-row {
    flex-direction: column;
  }

  .search-row button {
    width: 100%;
    min-height: 47px;
  }

  .admin-grid {
    grid-template-columns: 1fr;
  }

  .admin-actions button {
    flex: 1;
  }
}

/* REDUCED MOTION ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
