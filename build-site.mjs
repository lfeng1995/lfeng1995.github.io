import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'site-data.js'), 'utf8'), context);
const data = context.window.SITE_DATA;
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const plain = value => String(value ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const link = (url, label, className = '', title = '') => `<a href="${escape(url)}"${className ? ` class="${className}"` : ''}${title ? ` title="${escape(title)}"` : ''}${/^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
const clean = html => String(html ?? '').replace(/\s+(?:style|align|width|height)=(?:"[^"]*"|'[^']*')/gi, '').replace(/<\/?font[^>]*>/gi, '').replace(/target="_blank"/gi, 'target="_blank" rel="noopener noreferrer"').replace(/Code\/RCR\.zip/g, 'Code/RcR.zip');
const icons = {
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  scholar: '<path d="m2 9 10-6 10 6-10 6L2 9Z"/><path d="M6 12v6c4 3 8 3 12 0v-6M22 9v8"/>',
  external: '<path d="M14 3h7v7M21 3 10 14M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.external}</svg>`;
const navigation = [['About', 'index.html#about'], ['Research', 'index.html#research'], ['Publications', 'index.html#publications'], ['Experience', 'index.html#experience'], ['Honors', 'index.html#honors'], ['Group', 'index.html#team'], ['Service', 'index.html#service']];

function document(page, title, content) {
  const active = { 'research.html': 'Publications' }[page];
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Lei Feng (冯磊), Professor at Southeast University. Research in AI agents, agentic reinforcement learning, and AI security.">
${page === 'index.html' ? '<meta name="google-site-verification" content="W05h1Y3rGuQXrUuBnQ_l-rdKO04fQiR-cDqy-4horTA">' : ''}
<meta name="theme-color" content="#ffffff"><meta property="og:title" content="${escape(title)}"><meta property="og:type" content="website"><meta property="og:image" content="https://lfeng1995.github.io/assets/lei-feng.jpg">
<link rel="canonical" href="https://lfeng1995.github.io/${page === 'index.html' ? '' : page}"><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="style.css"><script src="site.js" defer></script><title>${escape(title)}</title>
</head><body data-page="${page}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="container header-inner"><a class="site-name" href="index.html">Lei Feng</a><button class="menu-toggle" aria-controls="site-nav" aria-expanded="false" type="button" hidden>Menu <span aria-hidden="true">☰</span></button><nav id="site-nav" aria-label="Main navigation">${navigation.map(([label, href]) => `<a href="${href}"${active === label ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div></header>
<main class="container" id="main">${content}</main>
<footer class="container site-footer">${link('https://cs.seu.edu.cn/fenglei/main.htm', `© ${new Date().getFullYear()} Lei Feng · Southeast University`)}</footer>
</body></html>\n`;
}
function presentationDetails(p) {
  const source = p.noteHtml || '';
  const distinctions = ['Oral', 'Spotlight', 'SAC Highlight Award', 'Outstanding Paper Honorable Mention'];
  const distinctionPattern = /\b(Outstanding Paper Honorable Mention|SAC Highlight Award|Oral|Spotlight)\b/gi;
  const labels = [...new Set([...plain(source).matchAll(distinctionPattern)].map(match => distinctions.find(label => label.toLowerCase() === match[1].toLowerCase())))];
  if (!labels.length) return { labels, noteHtml: source };
  const noteHtml = source
    .replace(/\b(?:Outstanding Paper Honorable Mention|SAC Highlight Award|Oral|Spotlight)\b\s*(?:[,;]\s*)?/gi, '')
    .replace(/<(b|strong)>\s*<\/\1>/gi, '')
    .replace(/\(\s*[,;]\s*/g, '(')
    .replace(/\s*[,;]\s*\)/g, ')')
    .replace(/\(\s*\)/g, '')
    .trim();
  return { labels, noteHtml };
}
function paper(p) {
  const venue = plain(p.venueHtml);
  const shortVenue = (venue.match(/\(([^()]+)\)/)?.[1] || venue.split(',')[0]).trim();
  const { labels, noteHtml } = presentationDetails(p);
  const venueLabel = [shortVenue, ...labels].join(' ');
  return `<article class="paper" id="paper-${p.sourceIndex}" data-publication data-year="${p.year}"><div class="venue">${escape(venueLabel)}</div><h3>${p.url ? link(p.url, escape(p.title)) : escape(p.title)}</h3><p class="authors">${clean(p.authorsHtml)}</p><p class="publication-detail">${clean(p.venueHtml)}</p>${noteHtml ? `<div class="paper-note">${clean(noteHtml)}</div>` : ''}</article>`;
}
const heading = (title, extra = '', eyebrow = '') => `${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<div class="section-heading"><h2>${title}</h2>${extra}</div>`;
const timeline = items => `<div class="timeline">${items.map(item => {
  const html = clean(item.html || item.text || item.title);
  const dates = plain(html).match(/\[?(?:19|20)\d{2}\]?|\((?:[A-Za-z]+ )?(?:19|20)\d{2}[^)]*\)/g);
  const label = item.period || item.year || dates?.find(d => d.startsWith('('))?.replace(/[()]/g, '') || dates?.[0]?.replace(/[\[\]]/g, '') || '';
  return `<div class="timeline-row"><div class="timeline-date">${escape(label)}</div><div>${html}</div></div>`;
}).join('')}</div>`;
function representativeWork(work) {
    if (!work.publicationId) {
      if (!work.title || !work.arxiv?.id || !work.arxiv?.url || !work.arxiv?.verifiedOn) throw new Error('Unpublished representative works require a verified arXiv record.');
      return `<li>${link(work.arxiv.url, escape(work.cardLabel || work.label || work.title), 'work-link', work.title)}<span class="work-venue">arXiv:${escape(work.arxiv.id)}</span></li>`;
    }
    const publication = data.publications.find(p => p.sourceIndex === work.publicationId);
    if (!publication) throw new Error(`Missing representative publication: ${work.publicationId}`);
    const venue = plain(publication.venueHtml).match(/\(([^()]+)\)/)?.[1] || plain(publication.venueHtml).split(',')[0];
    const venueYear = [venue.replace(/['’]\d{2}/g, '').trim(), publication.year, ...presentationDetails(publication).labels].join(' ');
    return `<li>${link(publication.url || `#paper-${publication.sourceIndex}`, escape(work.cardLabel || work.label || publication.title), 'work-link', publication.title)}<span class="work-venue">${escape(venueYear)}</span></li>`;
}
function representativeWorks(theme) {
  if (!theme.representativeWorks?.length) return '';
  const primary = theme.primaryPublicationIds || [];
  const leading = primary.map(id => theme.representativeWorks.find(work => work.publicationId === id)).filter(Boolean);
  const additional = theme.representativeWorks.filter(work => !primary.includes(work.publicationId) && (work.publicationId || (work.arxiv?.id && work.arxiv?.url && work.arxiv?.verifiedOn)));
  const published = additional.filter(work => work.publicationId);
  const preprints = additional.filter(work => !work.publicationId);
  return `<div class="representative-works" id="${escape(theme.id)}-works"><h4>Representative work</h4><ul>${[...leading, ...published, ...preprints].map(representativeWork).join('')}</ul></div>`;
}
const researchTopics = data.researchThemes.map(theme => `<article class="research-topic" aria-labelledby="${escape(theme.id)}-title"><div class="research-card-heading"><h3 id="${escape(theme.id)}-title">${escape(theme.title)}</h3></div><img class="research-diagram" src="${escape(theme.diagram)}" alt="${escape(theme.diagramAlt)}" width="320" height="280"><div class="research-description"><p>${escape(theme.overview)}</p></div>${representativeWorks(theme)}</article>`).join('');
const years = [...new Set(data.publications.map(p => p.year))].sort((a, b) => b - a);
const publicationList = () => `<nav class="year-navigation" aria-label="Publication years">${years.map(year => link(`#year-${year}`, String(year))).join('')}</nav><div class="papers">${years.map(year => `<section class="publication-year" data-year-group="${year}" id="year-${year}"><h3 class="publication-year-heading">${year}</h3>${data.publications.filter(p => p.year === year).map(paper).join('\n')}</section>`).join('\n')}</div>`;
const serviceRank = s => /Editorial/i.test(s.title) ? 0 : /Area Chair/i.test(s.title) ? 1 : /Senior Program Committee/i.test(s.title) ? 2 : /Organizer/i.test(s.title) ? 3 : 4;
const serviceSections = [...data.services].sort((a, b) => serviceRank(a) - serviceRank(b));
function teamMember(member) {
  const person = typeof member === 'string' ? { name: member } : member;
  const description = person.currentPosition ? `${person.role} → ${person.currentPosition}` : person.role ? ` — ${person.role}` : '';
  const period = person.period ? `<span class="member-period"> (${escape(person.period)})</span>` : '';
  return `<li><span class="member-name"${person.nameZh ? ` title="${escape(person.nameZh)}"` : ''}>${escape(person.name)}${person.currentPosition ? ', ' : ''}</span>${period}${description ? `<span class="member-role">${escape(description)}</span>` : ''}</li>`;
}
const teamContent = data.team.map(group => `<section class="team-group" aria-labelledby="${group.id}"><h3 id="${group.id}">${escape(group.title)}</h3><ul class="team-members" lang="en">${group.members.map(teamMember).join('')}</ul></section>`).join('');
const serviceContent = serviceSections.map(s => `<section class="service-group"><h3>${escape(s.title.replace(/:$/, ''))}</h3><ul class="detail-list">${s.items.map(i => `<li>${clean(i.html)}</li>`).join('')}</ul></section>`).join('');
const home = `
<section class="profile" id="about" aria-labelledby="profile-name"><span id="biography" class="anchor-alias"></span>
<div class="portrait"><img src="assets/lei-feng.jpg" alt="Portrait of Lei Feng" width="170" height="238" fetchpriority="high"></div>
<div class="profile-copy"><p class="eyebrow">Professor · Southeast University</p><h1 id="profile-name">Lei Feng <span lang="zh-CN">冯磊</span></h1><p class="affiliation">School of Computer Science and Engineering<br>${link('https://www.seu.edu.cn/', 'Southeast University')}</p><div class="biography">${clean(data.about.html)}</div><div class="contact-links">${link('mailto:fenglei@seu.edu.cn', `${icon('email')}Email`)}${link(data.profile.scholarUrl, `${icon('scholar')}Google Scholar`)}${link(data.profile.officialUrl, `${icon('external')}官方主页`)}</div></div></section>
<aside class="openings" aria-label="Research opportunities"><strong>Openings</strong><p>I am looking for highly motivated postdoctoral research fellows. Please ${link('mailto:fenglei@seu.edu.cn', 'email me')} if you are interested.</p></aside>
<section class="section" id="research" aria-labelledby="research-title">${heading('<span id="research-title">Research interests</span>')}<p class="section-intro research-intro">${escape(data.researchIntro)}</p><div class="research-topics">${researchTopics}</div></section>
<section class="section" id="publications" aria-labelledby="publications-title">${heading('<span id="publications-title">Publications</span>')}<p class="section-intro author-note">* Corresponding author; † Equal contribution.</p>${publicationList()}</section>
<section class="section" id="experience" aria-labelledby="experience-title"><span id="education" class="anchor-alias"></span><span id="Education" class="anchor-alias"></span>${heading('<span id="experience-title">Experience</span>')}${timeline([...data.experience, ...data.education])}</section>
<section class="section" id="honors" aria-labelledby="honors-title"><span id="Honors" class="anchor-alias"></span>${heading('<span id="honors-title">Honors & awards</span>')}${timeline(data.honors)}</section>
<section class="section" id="team" aria-labelledby="team-title">${heading('<span id="team-title">Group</span>')}<div class="team-groups">${teamContent}</div></section>
<section class="section" id="service" aria-labelledby="service-title">${heading('<span id="service-title">Academic service</span>')}<div class="service-groups">${serviceContent}</div></section>`;
const research = `<div class="page-heading"><p class="eyebrow">Research archive</p><h1>Publications</h1><p>A complete list of peer-reviewed publications.</p><p class="author-note">* Corresponding author; † Equal contribution. ${link(data.profile.scholarUrl, 'Google Scholar ↗')}</p></div>${publicationList()}`;
for (const [file, title, content] of [['index.html', 'Lei Feng · Southeast University', home], ['research.html', 'Publications · Lei Feng', research]]) {
  fs.writeFileSync(path.join(root, file), document(file, title, content));
  console.log(`Built ${file}`);
}
console.log('Built the academic website pages.');
