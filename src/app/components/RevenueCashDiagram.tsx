import React from 'react'

type Props = {
  compact?: boolean
}

export default function RevenueCashDiagram({ compact = false }: Props) {
  return (
    <div className={`revenue-cash-svg-wrap ${compact ? 'compact' : ''}`}>
      <svg
        viewBox="0 0 1000 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        {/* connecting lines */}
        <line x1="140" y1="100" x2="260" y2="100" className="rc-line" />
        <line x1="360" y1="100" x2="500" y2="100" className="rc-line" />
        <line x1="600" y1="100" x2="740" y2="100" className="rc-line" />
        <line x1="840" y1="100" x2="940" y2="100" className="rc-line" />

        {/* nodes */}
        {[
          { x: 100, label: 'Revenue', risk: false },
          { x: 300, label: 'Handoffs', risk: true },
          { x: 540, label: 'Billing', risk: true },
          { x: 780, label: 'Collections', risk: true },
          { x: 940, label: 'Cash', risk: false },
        ].map((node, i) => (
          <g
            key={i}
            className={`rc-node ${node.risk ? 'risk' : ''}`}
            transform={`translate(${node.x}, 100)`}
          >
            <circle r="30" />
            <text textAnchor="middle" dy="0.35em">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
