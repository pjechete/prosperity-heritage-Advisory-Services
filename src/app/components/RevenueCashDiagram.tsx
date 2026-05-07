'use client'

type Props = {
  compact?: boolean
}

export default function RevenueCashDiagram({ compact = false }: Props) {
  const steps = [
    { x: 70, label: 'Revenue', risk: false },
    { x: 265, label: 'Handoffs', risk: true },
    { x: 460, label: 'Billing', risk: true },
    { x: 655, label: 'Collections', risk: true },
    { x: 850, label: 'Cash', risk: false },
  ]

  return (
    <div className={`revenue-cash-svg-wrap ${compact ? 'compact' : ''}`}>
      <svg
        viewBox="0 0 1000 240"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Revenue to cash execution model"
      >
        <title>Revenue to Cash Execution Model</title>

        <rect
          x="238"
          y="34"
          width="548"
          height="152"
          rx="30"
          className="rc-risk-zone"
        />

        <text x="512" y="28" textAnchor="middle" className="rc-zone-label">
          EXECUTION RISK ZONE
        </text>

        <line x1="190" y1="118" x2="265" y2="118" className="rc-line" />
        <line x1="385" y1="118" x2="460" y2="118" className="rc-line risk-line" />
        <line x1="580" y1="118" x2="655" y2="118" className="rc-line risk-line" />
        <line x1="775" y1="118" x2="850" y2="118" className="rc-line" />

        {steps.map((step, index) => (
          <g
            key={step.label}
            className={`rc-card ${step.risk ? 'risk' : ''}`}
            transform={`translate(${step.x}, 70)`}
          >
            <rect width="120" height="96" rx="18" />

            {step.risk && (
              <text x="60" y="22" textAnchor="middle" className="rc-risk-tag">
                RISK POINT
              </text>
            )}

            <text x="60" y={step.risk ? 47 : 42} textAnchor="middle">
              {String(index + 1).padStart(2, '0')}
            </text>

            <text
              x="60"
              y={step.risk ? 71 : 66}
              textAnchor="middle"
              className="rc-label"
            >
              {step.label}
            </text>
          </g>
        ))}

        <text x="130" y="210" textAnchor="middle" className="rc-endpoint-label">
          Created
        </text>
        <text x="910" y="210" textAnchor="middle" className="rc-endpoint-label">
          Realized
        </text>
      </svg>

      <style jsx>{`
        .revenue-cash-svg-wrap {
          width: 100%;
          margin-top: 2rem;
          overflow-x: auto;
        }

        svg {
          width: 100%;
          min-width: ${compact ? '760px' : '900px'};
          height: auto;
          display: block;
        }

        .rc-risk-zone {
          fill: rgba(18, 124, 132, 0.055);
          stroke: rgba(18, 124, 132, 0.22);
          stroke-width: 1.5;
          stroke-dasharray: 8 8;
        }

        .rc-zone-label {
          fill: #0f646a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .rc-line {
          stroke: rgba(16, 32, 51, 0.22);
          stroke-width: 2;
        }

        .rc-line.risk-line {
          stroke: rgba(18, 124, 132, 0.42);
          stroke-width: 2.4;
        }

        .rc-card rect {
          fill: #ffffff;
          stroke: rgba(16, 32, 51, 0.14);
          stroke-width: 1.5;
          filter: drop-shadow(0 12px 22px rgba(16, 32, 51, 0.06));
          transition:
            transform 0.22s ease,
            stroke 0.22s ease,
            fill 0.22s ease,
            filter 0.22s ease;
        }

        .rc-card.risk rect {
          fill: rgba(18, 124, 132, 0.14);
          stroke: rgba(18, 124, 132, 0.7);
          stroke-width: 2.2;
          filter: drop-shadow(0 16px 26px rgba(18, 124, 132, 0.12));
        }

        .rc-card text {
          fill: #127c84;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .rc-card .rc-label {
          fill: #102033;
          font-size: ${compact ? '13px' : '14px'};
          font-weight: 700;
          letter-spacing: 0;
        }

        .rc-card.risk .rc-label {
          fill: #0f646a;
        }

        .rc-risk-tag {
          fill: #0f646a;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .rc-endpoint-label {
          fill: rgba(16, 32, 51, 0.52);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .rc-card:hover rect {
          fill: rgba(18, 124, 132, 0.18);
          stroke: #0f646a;
          transform: translateY(-4px);
          filter: drop-shadow(0 18px 28px rgba(18, 124, 132, 0.16));
        }
      `}</style>
    </div>
  )
}
