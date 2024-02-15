import dayjs from "dayjs";

export function formatCommentTime(commentTimestamp: string) {
  const now = dayjs();
  const commentTime = dayjs(commentTimestamp);

  // Calculate the difference in seconds between now and the comment time
  const diffSeconds = now.diff(commentTime, "second");

  // Use Day.js to format the time difference in human-readable format
  if (diffSeconds < 60) {
    return "just now!";
  } else if (diffSeconds < 3600) {
    const diffMinutes = Math.floor(diffSeconds / 60);
    return `${diffMinutes}m`;
  } else if (diffSeconds < 86400) {
    const diffHours = Math.floor(diffSeconds / 3600);
    return `${diffHours}h`;
  } else if (diffSeconds < 604800) {
    const diffDays = Math.floor(diffSeconds / 86400);
    return `${diffDays}d`;
  } else if (diffSeconds < 2592000) {
    const diffWeeks = Math.floor(diffSeconds / 604800);
    return `${diffWeeks}w`;
  } else if (diffSeconds < 31536000) {
    const diffMonths = Math.floor(diffSeconds / 2592000);
    return `${diffMonths}mo`;
  } else {
    return commentTime.format("MMM D, YYYY");
  }
}
