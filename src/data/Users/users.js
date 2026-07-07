import dayjs from "dayjs";

export const Users = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  name: 'Levi Blaque',
  username: 'realleviblaque',
  profile: '/profile.png',
  cover: '/profile.png',
  accountType: 'Freelancer',
  email: 'realleviblaque@gmail.com',
  details: {
    isOnline: true,
    isVerified: true,
    title: 'Full-Stack Developer',
    additionalTitle: 'Forex Trader',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    website: 'leviblaque.dev',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
    openToWork: true,
    openToHire: false
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  name: 'Levite Team',
  username: 'levite',
  profile: '/profile.png',
  cover: '/profile.png',
  accountType: 'Team',
  email: 'leviteteam@gmail.com',
  details: {
    isOnline: true,
    isVerified: true,
    title: 'Full-Stack Team',
    additionalTitle: 'Hackathon Team',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    website: 'leviteteam.com',
    counts: {
      following: 20,
      followers: 316000,
      posts: 50,
      project: 50
    },
    openToWork: true,
    openToHire: false
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  name: 'Lee Cruiter',
  username: 'leecruiter',
  profile: '/profile.png',
  cover: '/profile.png',
  accountType: 'Recruiter',
  email: 'leecruiter@gmail.com',
  details: {
    isOnline: false,
    isVerified: true,
    title: 'All-Time Recruiter',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    counts: {
      following: 2200,
      followers: 2600000,
      posts: 1400,
      jobs: 205
    },
    openToHire: true
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  name: 'Chinoso Chimuanya',
  username: 'realchinosochimuanaya',
  profile: '/profile.png',
  cover: '/profile.png',
  accountType: 'Freelancer',
  email: 'realleviblaque@gmail.com',
  details: {
    isOnline: true,
    isVerified: false,
    title: 'Full-Stack Developer',
    additionalTitle: 'Promoter/Blogger',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    website: 'leviblaque.dev',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
    openToWork: true,
    openToHire: true
  }
}]