import React from "react"; // import framework

// helper: minutes → JSX badge
function minutesBadge(minutes) {
  if (minutes == null) return null; // if no minutes given → nothing

  const short = minutes < 30; // under 30 min = coffee
  const units = short ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10); // round up
  const icon = short ? "☕" : "🍱"; // choose symbol

  // render emoji, fallback to [coffee xN] or [bento xN]
  return (
    <span style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Arial, sans-serif" }}>
      {icon.repeat(units) || `[${short ? "coffee" : "bento"} x${units}]`} {minutes} min read
    </span>
  );
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // destructure props, with default date
  return (
    <article>
      <h3>{title}</h3> {/* article title */}
      <small>
        {date} {/* article date or default */}
        {minutes != null && <> • {minutesBadge(minutes)}</>} {/* reading time */}
      </small>
      <p>{preview}</p> {/* preview text */}
    </article>
  );
}

export default Article; // export so ArticleList can use it
