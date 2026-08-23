import dayjs from "../../lib/dayjs";

export const Jobs = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open', // open, under discussion, taken
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 2000,
      max: 10000
    },
    deadline: 'March 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Level',
    location: 'Remote',
    totalApplied: 33
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Frontend Role Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Frontend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'HTML'
  }, {
    id: crypto.randomUUID(),
    name: 'Figma'
  }],
  info: {
    budget: {
      min: 4000,
      max: 13500
    },
    deadline: 'March 26, 2026',
    projectType: 'Long Term Contract',
    experience: 'Mid-Senior',
    location: 'On-Site',
    totalApplied: 14
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Under Discussion',
  details: {
    title: 'JavaScript Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Javascript Dev'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 800,
      max: 9500
    },
    deadline: '',
    projectType: 'Long Term Contract',
    experience: 'Senior',
    location: 'Remote',
    totalApplied: 40
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Taken',
  details: {
    title: 'UI/UX Designer Needed & Front-End Developer',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'UI/UX Designer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Figma'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }],
  info: {
    budget: {
      min: 1000,
      max: 6000
    },
    deadline: 'September 16, 2026',
    projectType: 'One-Time Project',
    experience: 'Mid-Senior',
    location: 'Remote',
    totalApplied: 12
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(),
  status: 'Open',
  details: {
    title: 'Backend Developer Needed',
    description: 'We are looking for an developer who has strong foundation flutter (dart) to create our official app for our company and who can work remotely but can also work on site if preferred',
    requirement: 'Backend Developer'
  },
  clients: {
    id: crypto.randomUUID(),
    username: 'realleviblaque',
    image: '/profile.png',
    isVerified: true
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Python'
  }, {
    id: crypto.randomUUID(),
    name: 'Javascript'
  }, {
    id: crypto.randomUUID(),
    name: 'Java'
  }, {
    id: crypto.randomUUID(),
    name: 'Nodejs'
  }],
  info: {
    budget: {
      min: 3000,
      max: 15000
    },
    deadline: 'March 16, 2026',
    projectType: 'Long Term Project',
    experience: 'Any Level',
    location: 'Remote',
    totalApplied: 80
  }
}]