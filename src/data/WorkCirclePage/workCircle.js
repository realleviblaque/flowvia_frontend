import dayjs from "../../lib/dayjs";


export const workCircle = [{ 
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'client',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'Levi',
    lastName: 'Blaque',
    username: 'realleviblaque',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 5000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Team',
  workCircleType: 'client',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    teamName: 'Dev Conect',
    username: 'devconnectofficial',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 7200
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(1, 'month').toISOString(),
    amount: 8600,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'client',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'David Kelechikwu',
    lastName: 'Okaofor',
    username: 'davidkele',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'UI/UX Designer',
    info: {
      isOnline: false,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(4, 'month').toISOString(),
    amount: 800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Recruiter',
  workCircleType: 'client',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    companyName: 'Delight Restar',
    username: 'delightrestar',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Delightful Recruiter',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 8000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 11200,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'client',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'Taiwo Musa',
    lastName: 'Ibrahim',
    username: 'taiwoibro',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Backend Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6400,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'freelancer',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'Levi',
    lastName: 'Blaque',
    username: 'realleviblaque',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 5000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Team',
  workCircleType: 'freelancer',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    teamName: 'Dev Conect',
    username: 'devconnectofficial',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 7200
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(1, 'month').toISOString(),
    amount: 8600,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'freelancer',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'David Kelechikwu',
    lastName: 'Okaofor',
    username: 'davidkele',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'UI/UX Designer',
    info: {
      isOnline: false,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(4, 'month').toISOString(),
    amount: 800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Recruiter',
  workCircleType: 'freelancer',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    companyName: 'Delight Restar',
    username: 'delightrestar',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Delightful Recruiter',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 8000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 11200,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  accountType: 'Freelancer',
  workCircleType: 'freelancer',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    id: crypto.randomUUID(),
    firstName: 'Taiwo Musa',
    lastName: 'Ibrahim',
    username: 'taiwoibro',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Backend Developer',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    },
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6400,
  }]
}]