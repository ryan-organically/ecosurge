import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — EcoSurge',
  description:
    'How the EcoSurge website handles data. It is a static site that collects no personal information directly and sets no cookies.',
}

export default function PrivacyPage() {
  return (
    <article className="doc-body legal-doc">
      <h1>Privacy Policy</h1>
      <p>
        <em>Last updated: 18 July 2026</em>
      </p>

      <p>
        This Privacy Policy explains how the EcoSurge website (the
        &ldquo;Site&rdquo;) handles information. EcoSurge is a static website
        with no user accounts, logins, or server-side application. We aim to
        collect as little data as possible.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        EcoSurge does <strong>not</strong> directly collect personal
        information. The Site has no sign-up, no login, no contact forms that
        submit to us, no first-party analytics, and no advertising or tracking
        pixels. We do <strong>not</strong> set first-party cookies.
      </p>

      <h2>2. Hosting and server logs</h2>
      <p>
        The Site is served as static files by a hosting provider (currently
        GitHub Pages). Like most web hosts, the provider may automatically log
        standard technical request information — such as your IP address, user
        agent, and the pages requested — for security and operational purposes.
        That processing is governed by the hosting provider&rsquo;s own privacy
        policy, not by EcoSurge.
      </p>

      <h2>3. Third-party requests made by your browser</h2>
      <p>
        Some pages cause your browser to contact third parties directly. When
        that happens, your browser shares technical information (such as your IP
        address) with those parties under their own privacy policies:
      </p>
      <ul>
        <li>
          <strong>NASA EONET / FIRMS</strong> — the Fire Watch section fetches
          live wildfire event data from NASA public APIs directly from your
          browser.
        </li>
        <li>
          <strong>Google Fonts</strong> — the Site loads the DM Sans typeface
          from Google&rsquo;s font CDN, which causes your browser to contact
          Google.
        </li>
        <li>
          <strong>Wikimedia Commons</strong> — species images may be loaded from
          Wikimedia.
        </li>
      </ul>
      <p>
        EcoSurge does not receive or store the information exchanged in these
        requests.
      </p>

      <h2>4. Data stored on your device</h2>
      <p>
        To work offline and load quickly, the Site may store data locally in
        your browser — including a cached copy of the species database
        (IndexedDB) and cached assets via a service worker. This information
        stays on your device, is not transmitted to EcoSurge, and can be cleared
        at any time through your browser settings.
      </p>

      <h2>5. Children&rsquo;s privacy</h2>
      <p>
        The Site is not directed to children and does not knowingly collect
        personal information from anyone, including children.
      </p>

      <h2>6. Your choices</h2>
      <p>
        Because we set no cookies and run no tracking, there is nothing for you
        to opt out of on our side. You can block third-party requests, clear
        local storage, or use privacy tools in your browser at any time.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update this Policy from time to time; the &ldquo;last
        updated&rdquo; date above will change accordingly.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about this Policy may be directed to{' '}
        <a href="mailto:contact@ecosurge.co">contact@ecosurge.co</a>.
      </p>
    </article>
  )
}
