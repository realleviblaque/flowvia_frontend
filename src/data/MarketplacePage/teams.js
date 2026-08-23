import { Users } from "../Users/users";

export const Teams = Users.filter(u => u.accountType === 'Team');