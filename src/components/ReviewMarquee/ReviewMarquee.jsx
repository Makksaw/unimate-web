import { reviews } from "../../data/reviews"
import "./ReviewMarquee.css"

function Star({ filled }) {
  return (
    <svg
      className={`rm-star ${filled ? "rm-star--on" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
    </svg>
  )
}

function ReviewCard({ review }) {
  const { user, title, description, rating } = review
  return (
    <div className="rm-card">
      <div className="rm-head">
        <div className="rm-avatar">{user[0]}</div>
        <div>
          <p className="rm-name">{user}</p>
          <div className="rm-stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} filled={n <= rating} />
            ))}
          </div>
        </div>
      </div>
      {title && <p className="rm-title">{title}</p>}
      {description && <p className="rm-text">{description}</p>}
    </div>
  )
}

function Row({ items, reverse = false, duration = 40 }) {
  const group = [...items, ...items, ...items]
  return (
    <div className="rm-row">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="rm-track"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {group.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function ReviewMarquee() {
  const half = Math.ceil(reviews.length / 2)
  return (
    <section className="rm-section">
      <p className="rm-label">★ Loved by students</p>
      <Row items={reviews.slice(0, half)} duration={40} />
      <Row items={reviews.slice(half)} reverse duration={50} />
    </section>
  )
}
