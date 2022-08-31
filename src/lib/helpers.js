// Candidate live date badge text
export const convertLiveDateToString = (daysFromPostedDate) => {
  if (daysFromPostedDate < 1) {
    return 'Added today';
  }
  if (daysFromPostedDate < 2 && daysFromPostedDate > 0) {
    return 'Added yesterday';
  }
  if (daysFromPostedDate < 7 && daysFromPostedDate > 1) {
    return 'Added this week';
  }
  if (daysFromPostedDate < 31 && daysFromPostedDate > 6) {
    return 'Added this month';
  }
  return 'New Candidate';
};

// Candidate level in text format for card
export const convertLevelToString = (level) => {
  if (level === '1') {
    return 'One';
  }
  if (level === '2') {
    return 'Two';
  }
  if (level === '3') {
    return 'Three';
  }
  return 'Pending';
};

// Candidate level explanations
export const convertLevelToJobLevel = (level) => {
  if (level === '1') {
    return ' was determined to have the experience to be suitable for entry levels roles in similar functions highlighted within Recommended Roles.';
  }
  if (level === '2') {
    return ' was determined to have the work experience suitable for intermediate roles with applicable skills as an IC or mid-level manager in similar functions to those highlighted within Recommended Roles.';
  }
  if (level === '3') {
    return ' has the applicable experience to either work autonomously as a Senior IC or build and lead teams in similar functions highlighted within Recommended Roles.';
  }
  return '';
};