import dayjs from "../../lib/dayjs";

export const user = {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  //image: '/profile.png',
  firstName: 'Levi',
  lastName: 'Blaque',
  username: 'realleviblaque',
  email: 'realleviblaque@gmail.com',
  bio: 'I am a forex trader and a full stack developer, founder and leader',
  title: 'Full Stack Developer',
  website: 'realleviblaque.dev',
  workPreference: 'Remote',  
  counts: {
    following: 300,
    followers: 1200,
    posts: 47,
    projects: 30
  },
  rates: {
    hourlyRate: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 500,
      max: 3000
    }
  },
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    isAvailable: true
  },
  workedWith: [],
  skills: [/* {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodjs'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodjs'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodjs'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodjs'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodjs'
  } */],
  links: [/* {
    id: crypto.randomUUID(),
    name: 'X',
    url: 'github.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Tiktok',
    url: 'tiktok.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Snapchat',
    url: 'snapchat.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Telegram',
    url: 'telegram.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Discord',
    url: 'discord.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Linkedin',
    url: 'linkedin.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Github',
    url: 'github.com/realleviblaque'
  } */],
  reviews: [],
}