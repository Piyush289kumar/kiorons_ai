/**
 * Format a date to readable string
 * @param {Date|string} date - Date object or ISO string
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options })
}
