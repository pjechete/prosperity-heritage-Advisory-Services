import Link from 'next/link'

export default function StrategicIntakePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="narrow">
          <p className="eyebrow">Selective Strategic Intake</p>
          <h1>Opportunity &amp; Investor Intake</h1>
          <p className="section-copy">
            This intake process is used for selective review of cross-border
            investment and trade opportunities.
          </p>
          <p className="section-copy">
            Submissions are reviewed privately and do not guarantee engagement,
            introduction, or funding. If there is a potential fit, we will reach
            out for additional discussion.
          </p>

          <div className="button-row">
            <Link
              href="https://forms.gle/REPLACE_WITH_YOUR_OPPORTUNITY_FORM_LINK"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit an Opportunity
            </Link>

            <Link
              href="https://forms.gle/REPLACE_WITH_YOUR_INVESTOR_FORM_LINK"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Investor Registration
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="card-grid two-up">
            <div className="card">
              <p className="section-label">For opportunity sponsors</p>
              <h2 className="section-title">Submit an Opportunity</h2>
              <p>
                Use this form to share investment or trade opportunities for
                internal review. We assess opportunities based on readiness,
                clarity, risk transparency, and alignment potential.
              </p>
              <ul>
                <li>Basic project and sponsor information</li>
                <li>Sector, geography, and capital need</li>
                <li>Stage, readiness, and supporting details</li>
                <li>Commercial context and key risks</li>
              </ul>
              <div className="mt-24">
                <Link
                  href="https://forms.gle/REPLACE_WITH_YOUR_OPPORTUNITY_FORM_LINK"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Opportunity Form
                </Link>
              </div>
            </div>

            <div className="card">
              <p className="section-label">For investors and partners</p>
              <h2 className="section-title">Register Investor Interest</h2>
              <p>
                Use this form to share your investment profile, geographic
                interests, sector focus, and deal preferences so we can assess
                potential alignment.
              </p>
              <ul>
                <li>Investor type and capital range</li>
                <li>Preferred sectors and regions</li>
                <li>Experience in emerging markets</li>
                <li>Risk tolerance and investment approach</li>
              </ul>
              <div className="mt-24">
                <Link
                  href="https://forms.gle/REPLACE_WITH_YOUR_INVESTOR_FORM_LINK"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Investor Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <p className="section-label">How it works</p>
          <h2 className="section-title">A selective and controlled review process</h2>

          <div className="process-band">
            <div className="process-item">
              <span>Step 1</span>
              <h3>Submit</h3>
              <p>
                Complete the relevant intake form with enough detail for an
                initial review.
              </p>
            </div>

            <div className="process-item">
              <span>Step 2</span>
              <h3>Review</h3>
              <p>
                Submissions are reviewed internally for quality, readiness,
                seriousness, and alignment.
              </p>
            </div>

            <div className="process-item">
              <span>Step 3</span>
              <h3>Follow-up</h3>
              <p>
                If there is a potential fit, we will reach out for additional
                information or next-step discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="narrow">
          <div className="cta-box compact">
            <p className="section-label">Important note</p>
            <h2>This process is selective</h2>
            <p>
              We review submissions privately and only move forward where there
              is a clear basis for further discussion. Not all submissions will
              receive a next-step engagement.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
