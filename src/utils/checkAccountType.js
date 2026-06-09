export function checkAccountType(account) {
  if (account.accountType === 'Recruiter') {
    return 'client-account-type';
  } else if (account.accountType === 'Team') {
    return 'team-account-type';
  } else if (account.accountType === 'Freelancer') {
    return 'self-account-type'
  }
}