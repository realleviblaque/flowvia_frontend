import { Users } from "../Users/users";

export const Freelancers = Users.filter(u => u.accountType === 'Freelancer');