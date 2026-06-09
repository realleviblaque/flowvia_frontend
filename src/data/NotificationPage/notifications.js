import dayjs from "dayjs"

export const Notifications = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(10, 'day').toISOString(),
  contents: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'hire request',
    sender: {
      name: 'Apex Build Co',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    title: 'E-Commerce Platform Rebuid',
    read: true,
    details: {
      title: 'E-Commerce Platform Rebuid',
      minBud: 400,
      maxud: 2000,
      deadline: 'June 20, 2026'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'message',
    sender: {
      name: 'Amara Osei',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: true,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      title: 'FinTech Project Rebuild',
      workType: 'new job'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      message: 'I am reaching out to you because i am really impressed with our previouse job and i would love you to work on my new project, i want to buuild an ecommerce website and i want you to take the job',
      workType: 'rehire'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'following',
    sender: {
      name: 'Neclues Studio',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: true
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'review',
    sender: {
      name: 'Remi Marthin',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      title: 'Flowvia MVP',
      star: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'mention',
    sender: {
      name: 'Tunder Nwosu',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: true,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'project',
    sender: {
      name: 'Kofi Mensah',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: true,
    details: {
      about: 'Milestone 3',
      title: 'E-Commerce Rebuild',
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(2, 'day').toISOString(),
  contents: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'hire request',
    sender: {
      name: 'Apex Build Co',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    title: 'E-Commerce Platform Rebuid',
    read: true,
    details: {
      title: 'E-Commerce Platform Rebuid',
      minBud: 400,
      maxud: 2000,
      deadline: 'June 20, 2026'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'message',
    sender: {
      name: 'Amara Osei',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: true,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      title: 'FinTech Project Rebuild',
      workType: 'new job'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      message: 'I am reaching out to you because i am really impressed with our previouse job and i would love you to work on my new project, i want to buuild an ecommerce website and i want you to take the job',
      workType: 'rehire'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'following',
    sender: {
      name: 'Neclues Studio',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: true
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'review',
    sender: {
      name: 'Remi Marthin',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: true,
    details: {
      title: 'Flowvia MVP',
      star: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'mention',
    sender: {
      name: 'Tunder Nwosu',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: true,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'project',
    sender: {
      name: 'Kofi Mensah',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: true,
    details: {
      title: 'E-Commerce Rebuild',
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(1, 'day').toISOString(),
  contents: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'hire request',
    sender: {
      name: 'Apex Build Co',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    title: 'E-Commerce Platform Rebuid',
    read: false,
    details: {
      title: 'E-Commerce Platform Rebuid',
      minBud: 400,
      maxud: 2000,
      deadline: 'June 20, 2026'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'message',
    sender: {
      name: 'Amara Osei',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: false,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      title: 'FinTech Project Rebuild',
      workType: 'new job'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      message: 'I am reaching out to you because i am really impressed with our previouse job and i would love you to work on my new project, i want to buuild an ecommerce website and i want you to take the job',
      workType: 'rehire'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'following',
    sender: {
      name: 'Neclues Studio',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: false
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'review',
    sender: {
      name: 'Remi Marthin',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      title: 'Flowvia MVP',
      star: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'mention',
    sender: {
      name: 'Tunder Nwosu',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: false,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'project',
    sender: {
      name: 'Kofi Mensah',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: false,
    details: {
      title: 'E-Commerce Rebuild',
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  contents: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'hire request',
    sender: {
      name: 'Apex Build Co',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    title: 'E-Commerce Platform Rebuid',
    read: false,
    details: {
      title: 'E-Commerce Platform Rebuid',
      minBud: 400,
      maxud: 2000,
      deadline: 'June 20, 2026'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'message',
    sender: {
      name: 'Amara Osei',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: false,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      title: 'FinTech Project Rebuild',
      workType: 'new job'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'work circle',
    sender: {
      name: 'Apex Build Co.',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      message: 'I am reaching out to you because i am really impressed with our previouse job and i would love you to work on my new project, i want to buuild an ecommerce website and i want you to take the job',
      workType: 'rehire'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'following',
    sender: {
      name: 'Neclues Studio',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: false
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'review',
    sender: {
      name: 'Remi Marthin',
      profileImg: '/profile.png',
      accountType: 'Recruiter'
    },
    read: false,
    details: {
      title: 'Flowvia MVP',
      star: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe!',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'mention',
    sender: {
      name: 'Tunder Nwosu',
      profileImg: '/profile.png',
      accountType: 'Freelancer'
    },
    read: false,
    details: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste velit ipsa perferendis dolore quibusdam quisquam cumque illum minus commodi corrupti id necessitatibus nihil dolorum ullam rem omnis, facere saepe',
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    type: 'project',
    sender: {
      name: 'Kofi Mensah',
      profileImg: '/profile.png',
      accountType: 'Team'
    },
    read: false,
    details: {
      title: 'E-Commerce Rebuild',
    }
  }]
}]