import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — EcoSurge',
  description:
    'Terms of Use for the EcoSurge website, including its conceptual and forward-looking nature and the absence of any securities offering.',
}

export default function TermsPage() {
  return (
    <article className="doc-body legal-doc">
      <h1>Terms of Use</h1>
      <p>
        <em>Last updated: 18 July 2026</em>
      </p>

      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
        the EcoSurge website and its content (the &ldquo;Site&rdquo;). By using
        the Site, you agree to these Terms. If you do not agree, please do not
        use the Site.
      </p>

      <h2>1. Conceptual and forward-looking nature</h2>
      <p>
        EcoSurge is a conceptual, pre-commercial climate-technology project. The
        technologies, systems, capabilities, timelines, deployments, metrics,
        and results described on the Site — including in studies, whitepapers,
        figures, diagrams, and marketing pages — are <strong>illustrative,
        aspirational, and forward-looking</strong>. Except where a source is
        explicitly cited, quantitative figures are modeled, estimated, or
        hypothetical and have <strong>not</strong> been deployed at scale,
        independently validated, peer-reviewed, or verified. Nothing on the Site
        should be relied upon as a statement of present fact, a scientific
        conclusion, or a promise of future performance.
      </p>

      <h2>2. No offer of securities; no investment solicitation</h2>
      <p>
        Nothing on the Site is, or should be construed as, an offer to sell, a
        solicitation of an offer to buy, or a recommendation regarding any
        security, financial instrument, or investment, in any jurisdiction.
        EcoSurge is not currently offering or selling securities. Any
        references to markets, capital, valuation, or investment are general
        commentary only and do not describe any past, present, or pending
        financing. The Site does not constitute investment, financial, legal,
        tax, or accounting advice.
      </p>

      <h2>3. No professional advice</h2>
      <p>
        Content on the Site is provided for general informational and
        illustrative purposes only and is not a substitute for professional
        scientific, engineering, environmental, medical, legal, or financial
        advice. Do not rely on the Site to make decisions with legal,
        financial, safety, or environmental consequences.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The Site&rsquo;s original text, design, and code are the property of
        EcoSurge or its contributors and are provided for personal,
        non-commercial viewing. Third-party content (see Section 6) remains the
        property of its respective owners.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        You agree not to misuse the Site, including by attempting to disrupt it,
        circumvent its security, scrape it in a manner that burdens its
        infrastructure, or use its content to misrepresent EcoSurge or to
        deceive others.
      </p>

      <h2>6. Third-party content and data</h2>
      <p>
        The Site displays data and media from third parties, each governed by
        its own terms:
      </p>
      <ul>
        <li>
          <strong>Wildfire event data</strong> from NASA&rsquo;s Earth
          Observatory Natural Event Tracker (EONET) and NASA FIRMS, courtesy of
          NASA/USGS. EcoSurge is not affiliated with or endorsed by NASA.
        </li>
        <li>
          <strong>Species imagery</strong> sourced from Wikimedia Commons under
          the respective licenses of each file.
        </li>
      </ul>
      <p>
        EcoSurge does not guarantee the accuracy, completeness, or timeliness of
        third-party data and is not responsible for third-party websites linked
        from the Site.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
        without warranties of any kind, whether express or implied, including
        merchantability, fitness for a particular purpose, accuracy, and
        non-infringement. EcoSurge does not warrant that the Site will be
        uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, EcoSurge and its contributors
        will not be liable for any indirect, incidental, special, consequential,
        or punitive damages, or any loss arising from your use of or reliance on
        the Site.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms at any time. Continued use of the Site after
        changes are posted constitutes acceptance of the revised Terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which the
        operator of EcoSurge is established, without regard to conflict-of-law
        principles. <em>[Operator to specify governing jurisdiction.]</em>
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms may be directed to{' '}
        <a href="mailto:contact@ecosurge.co">contact@ecosurge.co</a>.
      </p>
    </article>
  )
}
