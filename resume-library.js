// Add or edit resume versions here. Drop each PDF into /resumes using the `file` path below.
// Versions whose PDF is not uploaded yet appear as "Coming soon" automatically.
const resumeTracks = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'ai', label: 'AI' },
  { id: 'platform', label: 'Platform & Data' },
  { id: 'product', label: 'Product' },
  { id: 'delivery', label: 'Program & Project' },
];

const resumeVersions = [
  {
    id: 'general',
    track: 'general',
    title: 'General resume',
    file: 'Shubham-Jha-Resume.pdf',
    pitch: 'A balanced view of my engineering, AI, and product work. The best place to start.',
    roles: ['Roles spanning disciplines', 'Not sure which fits'],
    emphasis: [
      'Experience at Cisco, Micron, Purdue RCAC, and Johnson & Johnson',
      'Highlights across product, engineering, and applied AI',
      'PMP, CSPO, CSM, NVIDIA, and CCNA certifications',
    ],
    keywords: ['overview', 'generalist', 'complete'],
  },
  {
    id: 'full-stack-engineer',
    track: 'engineering',
    title: 'Full Stack Engineer',
    file: 'resumes/shubham-jha-full-stack-engineer.pdf',
    pitch: 'End-to-end features, from React and Angular interfaces to Java and Python services.',
    roles: ['Full Stack Engineer', 'Software Engineer', 'Product Engineer'],
    emphasis: [
      'Cisco Spaces export: Spring Boot services and a React front end behind 700% usage growth',
      'ITRUST at Micron: Angular app, schema, and access-control model',
      'AIDA³: React, FastAPI, and Firestore competition platform for 16 teams',
    ],
    keywords: ['react', 'angular', 'typescript', 'javascript', 'java', 'spring', 'python', 'fastapi', 'sql', 'swe', 'web'],
  },
  {
    id: 'front-end-engineer',
    track: 'engineering',
    title: 'Front-End Engineer',
    file: 'resumes/shubham-jha-front-end-engineer.pdf',
    pitch: 'Accessible, maintainable interfaces and large-scale UI migrations.',
    roles: ['Front-End Engineer', 'UI Engineer', 'React Developer'],
    emphasis: [
      'Angular-to-React migration coordinated across three global teams',
      'WCAG accessibility work with Jest, React Testing Library, and Cypress',
      'Spanish and Japanese localization across 4+ platform apps',
    ],
    keywords: ['react', 'angular', 'typescript', 'accessibility', 'wcag', 'css', 'html', 'ui', 'i18n', 'localization', 'cypress', 'jest', 'frontend'],
  },
  {
    id: 'back-end-engineer',
    track: 'engineering',
    title: 'Back-End Engineer',
    file: 'resumes/shubham-jha-back-end-engineer.pdf',
    pitch: 'APIs, integrations, and data models for multi-tenant services.',
    roles: ['Back-End Engineer', 'API Engineer', 'Java Developer'],
    emphasis: [
      'Multi-cloud export integrations with S3, Azure, Google Cloud, and Box',
      'Spring Boot geofencing APIs that cut API usage cost by 50%',
      'FastAPI services for AI research and competition platforms',
    ],
    keywords: ['java', 'spring', 'python', 'fastapi', 'rest', 'api', 'postgresql', 'mongodb', 'kafka', 'microservices', 'backend', 'node'],
  },
  {
    id: 'systems-software-engineer',
    track: 'engineering',
    title: 'Systems Software Engineer',
    file: 'resumes/shubham-jha-systems-software-engineer.pdf',
    pitch: 'Low-level C work on network operating systems and protocol tooling.',
    roles: ['Systems Engineer', 'Network Software Engineer', 'Embedded Engineer'],
    emphasis: [
      'Cisco IOS XE multicast, socket, and packet-forwarding code in C',
      'Production defect resolution with GDB and Linux tooling on RHEL',
      'Open-source Wireshark packet-dissector contribution',
    ],
    keywords: ['c', 'c++', 'linux', 'networking', 'tcp/ip', 'gdb', 'embedded', 'multicast', 'wireshark', 'ccna', 'bash'],
  },
  {
    id: 'ai-engineer',
    track: 'ai',
    title: 'AI Engineer',
    file: 'resumes/shubham-jha-ai-engineer.pdf',
    pitch: 'Retrieval, multi-agent systems, and evaluation that hold up under real use.',
    roles: ['AI Engineer', 'ML Engineer', 'GenAI / LLM Engineer'],
    emphasis: [
      'ACID-R RAG pipeline: 95% entity-extraction accuracy, search cut from ~5 minutes to under 10 seconds',
      'Gemini multi-agent system with custom MCP tools and structured outputs',
      'Nine retrieval experiments on H100 GPUs that shaped the SmartSearch roadmap',
    ],
    keywords: ['ai', 'ml', 'llm', 'rag', 'genai', 'agents', 'agentic', 'mcp', 'gemini', 'faiss', 'pytorch', 'cuda', 'nlp', 'evaluation', 'nvidia', 'machine learning'],
  },
  {
    id: 'ai-product-manager',
    track: 'ai',
    title: 'AI Product Manager',
    file: 'resumes/shubham-jha-ai-product-manager.pdf',
    pitch: 'Turning AI capability into products people trust and adopt.',
    roles: ['AI Product Manager', 'GenAI Product Owner', 'AI Solutions Lead'],
    emphasis: [
      'Evaluation-led decision to defer reranker investment until quality improved',
      'Guardrails, hallucination checks, and token-cost tracking for LLM products',
      'Helped 10+ colleagues adopt AI tools; NVIDIA-certified in agentic AI',
    ],
    keywords: ['ai', 'product', 'pm', 'genai', 'llm', 'strategy', 'evaluation', 'adoption', 'responsible ai'],
  },
  {
    id: 'devops-platform-engineer',
    track: 'platform',
    title: 'DevOps / Platform Engineer',
    file: 'resumes/shubham-jha-devops-platform-engineer.pdf',
    pitch: 'Kubernetes, CI/CD, and recoverable infrastructure for production platforms.',
    roles: ['DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer'],
    emphasis: [
      'StreamCI Kafka cutover with no downtime or message loss',
      'MongoDB point-in-time backups: ~84 GB in ~75 minutes to S3',
      'Multi-tenant services on AWS EKS; Dockerfiles and Kustomize on a Helm and Flux GitOps platform',
    ],
    keywords: ['devops', 'sre', 'kubernetes', 'k8s', 'docker', 'helm', 'kustomize', 'ci/cd', 'cicd', 'aws', 'eks', 'kafka', 'prometheus', 'grafana', 'gitops', 'reliability', 'infrastructure', 'jenkins', 'github actions'],
  },
  {
    id: 'data-engineer',
    track: 'platform',
    title: 'Data Engineer',
    file: 'resumes/shubham-jha-data-engineer.pdf',
    pitch: 'Pipelines, schemas, and governed access to the data teams rely on.',
    roles: ['Data Engineer', 'Analytics Engineer', 'BI Developer'],
    emphasis: [
      'ITRUST: data updates cut from ~1 hour to ~5 minutes, with audit logs',
      'Sentinel stored-procedure change tracking adopted by 40+ engineers',
      'Tableau/TabPy chart recommendations and Power BI dashboards at J&J',
    ],
    keywords: ['data', 'sql', 'etl', 'pipelines', 'tableau', 'power bi', 'analytics', 'governance', 'postgresql', 'sql server', 'mongodb', 'bi', 'stored procedures'],
  },
  {
    id: 'product-manager',
    track: 'product',
    title: 'Product Manager',
    file: 'resumes/shubham-jha-product-manager.pdf',
    pitch: 'Discovery, prioritization, and launches measured by adoption.',
    roles: ['Product Manager', 'Associate PM', 'Product Owner'],
    emphasis: [
      'Cisco Spaces export revamp that grew usage by 700%',
      'ITRUST and Sentinel adopted across a 40+ engineer unit at Micron',
      'CSPO-certified; PRDs, roadmaps, user research, and business cases',
    ],
    keywords: ['pm', 'product', 'roadmap', 'discovery', 'research', 'prd', 'strategy', 'cspo', 'owner', 'apm', 'kpi'],
  },
  {
    id: 'technical-product-manager',
    track: 'product',
    title: 'Technical Product Manager',
    file: 'resumes/shubham-jha-technical-product-manager.pdf',
    pitch: 'Product ownership for platforms, APIs, and developer-facing systems.',
    roles: ['Technical Product Manager', 'Platform PM', 'API Product Manager'],
    emphasis: [
      'Owned multi-cloud export integrations from customer pain point to launch',
      'Acceptance criteria covering credential, authorization, and key-expiry edge cases',
      'Cerebro prototype: 12 documented developer-friction issues with proposed fixes',
    ],
    keywords: ['technical product', 'platform', 'api', 'developer', 'b2b', 'saas', 'pm', 'product', 'integrations'],
  },
  {
    id: 'technical-program-manager',
    track: 'delivery',
    title: 'Technical Program Manager',
    file: 'resumes/shubham-jha-technical-program-manager.pdf',
    pitch: 'Cross-team delivery, dependencies, and risk across engineering programs.',
    roles: ['Technical Program Manager', 'Engineering Program Manager'],
    emphasis: [
      '40+ production and field issues closed, 95% on the committed date',
      'Angular-to-React migration coordinated across three time zones',
      'Phased Spanish and Japanese rollout across engineering teams',
    ],
    keywords: ['tpm', 'program', 'delivery', 'dependencies', 'agile', 'scrum', 'risk', 'stakeholders', 'csm', 'release', 'jira'],
  },
  {
    id: 'project-manager',
    track: 'delivery',
    title: 'Project Manager',
    file: 'resumes/shubham-jha-project-manager.pdf',
    pitch: 'Charters, schedules, budgets, and teams that deliver on commitments.',
    roles: ['Project Manager', 'Scrum Master', 'Delivery Lead'],
    emphasis: [
      'HUBzero: executive-approved charter and a four-person core team',
      '~$10K quarterly budgets; 40+ events for 5,000+ attendees',
      'PMP, CSM, and CSPO certified',
    ],
    keywords: ['pmp', 'project', 'scrum master', 'csm', 'budget', 'schedule', 'charter', 'agile', 'delivery', 'waterfall', 'smartsheet'],
  },
];

(() => {
  const dialog = document.querySelector('#resume-picker');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const byId = id => dialog.querySelector(`#${id}`);
  const els = {
    query: byId('picker-query'),
    tracks: byId('picker-tracks'),
    status: byId('picker-status'),
    list: byId('picker-list'),
    track: byId('picker-detail-track'),
    title: byId('picker-detail-title'),
    pitch: byId('picker-detail-pitch'),
    roles: byId('picker-detail-roles'),
    emphasis: byId('picker-detail-emphasis'),
    actions: byId('picker-actions'),
    download: byId('picker-download'),
    preview: byId('picker-preview'),
    copy: byId('picker-copy'),
    pending: byId('picker-pending'),
  };

  const state = { track: 'all', query: '', selected: 'general', availability: new Map(), checked: false };
  let copyTimer;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const trackLabel = id => (id === 'general' ? 'Start here' : resumeTracks.find(track => track.id === id)?.label ?? '');
  const findVersion = id => resumeVersions.find(version => version.id === id);
  const isAvailable = version => state.availability.get(version.id) !== false;
  const downloadName = version =>
    version.id === 'general' ? 'Shubham-Jha-Resume.pdf' : `Shubham-Jha-${version.title.replace(/[^A-Za-z0-9]+/g, '-').replace(/-+$/, '')}-Resume.pdf`;
  const searchText = new Map(
    resumeVersions.map(version => [
      version.id,
      [version.title, version.pitch, trackLabel(version.track), ...version.roles, ...version.emphasis, ...version.keywords].join(' ').toLowerCase(),
    ]),
  );

  function visibleVersions() {
    const terms = state.query.toLowerCase().split(/\s+/).filter(Boolean);
    return resumeVersions.filter(
      version => (state.track === 'all' || version.track === state.track) && terms.every(term => searchText.get(version.id).includes(term)),
    );
  }

  function renderTracks() {
    els.tracks.replaceChildren(
      ...resumeTracks.map(track => {
        const count = track.id === 'all' ? resumeVersions.length : resumeVersions.filter(version => version.track === track.id).length;
        const button = el('button');
        button.type = 'button';
        button.dataset.track = track.id;
        button.setAttribute('aria-pressed', String(track.id === state.track));
        button.append(track.label, el('span', '', String(count)));
        return button;
      }),
    );
  }

  function renderList() {
    const focusedId = document.activeElement?.closest?.('#picker-list [data-id]')?.dataset.id;
    const versions = visibleVersions();
    if (versions.length && !versions.some(version => version.id === state.selected)) state.selected = versions[0].id;

    if (!versions.length) {
      const empty = el('li', 'picker-empty');
      const reset = el('button', 'picker-secondary', 'Show the general resume');
      reset.type = 'button';
      reset.dataset.showGeneral = '';
      empty.append(el('p', '', `No version matches “${state.query}”. The general resume covers everything.`), reset);
      els.list.replaceChildren(empty);
    } else {
      els.list.replaceChildren(
        ...versions.map(version => {
          const item = el('li');
          const button = el('button', 'picker-option');
          button.type = 'button';
          button.dataset.id = version.id;
          button.setAttribute('aria-pressed', String(version.id === state.selected));
          const head = el('span', 'picker-option-head');
          head.append(el('span', 'picker-option-title', version.title));
          if (!isAvailable(version)) head.append(el('span', 'picker-soon', 'Coming soon'));
          button.append(el('span', 'picker-option-track', trackLabel(version.track)), head, el('span', 'picker-option-pitch', version.pitch));
          item.append(button);
          return item;
        }),
      );
    }

    els.status.textContent = state.query
      ? `${versions.length} ${versions.length === 1 ? 'match' : 'matches'} for “${state.query}”`
      : `Showing ${versions.length} of ${resumeVersions.length} versions`;

    if (focusedId) els.list.querySelector(`[data-id="${focusedId}"]`)?.focus();
    renderDetail();
  }

  function renderDetail() {
    const version = findVersion(state.selected);
    els.track.textContent = trackLabel(version.track);
    els.title.textContent = version.title;
    els.pitch.textContent = version.pitch;
    els.roles.replaceChildren(...version.roles.map(role => el('li', '', role)));
    els.emphasis.replaceChildren(...version.emphasis.map(point => el('li', '', point)));

    const available = isAvailable(version);
    els.actions.hidden = !available;
    els.pending.hidden = available;
    if (!available) return;
    els.download.href = version.file;
    els.download.download = downloadName(version);
    els.preview.href = version.file;
    clearTimeout(copyTimer);
    els.copy.textContent = 'Copy link';
  }

  function select(id) {
    state.selected = id;
    for (const button of els.list.querySelectorAll('[data-id]')) button.setAttribute('aria-pressed', String(button.dataset.id === id));
    renderDetail();
  }

  function showGeneral() {
    state.query = '';
    state.track = 'all';
    state.selected = 'general';
    els.query.value = '';
    renderTracks();
    renderList();
    els.list.querySelector('[data-id="general"]')?.focus();
  }

  async function checkAvailability() {
    if (state.checked) return;
    state.checked = true;
    const results = await Promise.all(
      resumeVersions.map(async version => {
        try {
          const response = await fetch(version.file, { method: 'HEAD', cache: 'no-store' });
          return [version.id, response.ok];
        } catch {
          return [version.id, true];
        }
      }),
    );
    state.availability = new Map(results);
    renderList();
  }

  function open(id) {
    if (id && findVersion(id)) state.selected = id;
    renderTracks();
    renderList();
    dialog.showModal();
    const selected = els.list.querySelector(`[data-id="${state.selected}"]`);
    selected?.focus();
    selected?.scrollIntoView({ block: 'nearest' });
    checkAvailability();
  }

  for (const trigger of document.querySelectorAll('[data-resume-library]')) {
    trigger.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      open();
    });
  }

  els.tracks.addEventListener('click', event => {
    const button = event.target.closest('[data-track]');
    if (!button) return;
    state.track = button.dataset.track;
    for (const chip of els.tracks.querySelectorAll('[data-track]')) chip.setAttribute('aria-pressed', String(chip === button));
    renderList();
  });

  els.query.addEventListener('input', () => {
    state.query = els.query.value.trim();
    renderList();
  });

  els.list.addEventListener('click', event => {
    const option = event.target.closest('[data-id]');
    if (option) select(option.dataset.id);
  });

  els.list.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    const options = [...els.list.querySelectorAll('[data-id]')];
    const index = options.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const next = options[(index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length];
    next.focus();
    select(next.dataset.id);
  });

  els.copy.addEventListener('click', async () => {
    const base = document.querySelector('link[rel="canonical"]')?.href ?? `${location.origin}${location.pathname}`;
    const url = new URL(base);
    url.searchParams.set('resume', state.selected);
    try {
      await navigator.clipboard.writeText(url.href);
      els.copy.textContent = 'Link copied';
    } catch {
      els.copy.textContent = 'Copy unavailable';
    }
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      els.copy.textContent = 'Copy link';
    }, 2000);
  });

  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('[data-picker-close]')) dialog.close();
    else if (event.target.closest('[data-show-general]')) showGeneral();
  });

  dialog.addEventListener('close', () => {
    const url = new URL(location.href);
    if (!url.searchParams.has('resume')) return;
    url.searchParams.delete('resume');
    history.replaceState(null, '', url);
  });

  const requested = new URLSearchParams(location.search).get('resume');
  if (requested && findVersion(requested)) open(requested);
})();
