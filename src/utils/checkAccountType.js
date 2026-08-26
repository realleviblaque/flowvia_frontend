export function checkAccountType(account) {
  if (account === 'Recruiter') {
    return 'client-account-type';
  } else if (account === 'Team') {
    return 'team-account-type';
  } else if (account === 'Freelancer') {
    return 'self-account-type'
  }
}