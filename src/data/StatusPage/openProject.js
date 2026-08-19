import dayjs from '../../lib/dayjs'

export const openProjects = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  jobType: 'Public',
  isOpen: true,
  details: {
    name: 'NodeJs Backend Developer Needed',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  info: {
    minBudget: 500,
    maxBudget: 2000,
    type: 'Part-time',
    deadline: 'Nov 12',
    applicant: 7
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'TailwindCSS'
  }],
  applicant: [{
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Jordan Park',
      username: 'jordanpark',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'UI Developer'
    },
    stats: {
      rating: 4.2,
      jobsDone: 9
    },
    application: {
      status: 'reviewed',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Michael Cole',
      username: 'michaelcole',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.6,
      jobsDone: 20
    },
    application: {
      status: 'in discussion',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: dayjs().toISOString(),
      discussionId: crypto.randomUUID()
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  jobType: 'Public',
  isOpen: true,
  details: {
    name: 'React Developer Needed - Part-time',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  info: {
    minBudget: 500,
    maxBudget: 2000,
    type: 'Part-time',
    deadline: 'Nov 12',
    applicant: 7
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'TailwindCSS'
  }],
  applicant: [{
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Jordan Park',
      username: 'jordanpark',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'UI Developer'
    },
    stats: {
      rating: 4.2,
      jobsDone: 9
    },
    application: {
      status: 'reviewed',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Michael Cole',
      username: 'michaelcole',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.6,
      jobsDone: 20
    },
    application: {
      status: 'in discussion',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: dayjs().toISOString(),
      discussionId: crypto.randomUUID()
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  jobType: 'Public',
  isOpen: true,
  details: {
    name: 'NextJs Developer, MERN Stack and Full Stack Developer Urgently Needed',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  info: {
    minBudget: 500,
    maxBudget: 2000,
    type: 'Part-time',
    deadline: 'Nov 12',
    applicant: 7
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'TailwindCSS'
  }],
  applicant: [{
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Jordan Park',
      username: 'jordanpark',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'UI Developer'
    },
    stats: {
      rating: 4.2,
      jobsDone: 9
    },
    application: {
      status: 'reviewed',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.8,
      jobsDone: 28
    },
    application: {
      status: 'shortlisted',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Michael Cole',
      username: 'michaelcole',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.6,
      jobsDone: 20
    },
    application: {
      status: 'in discussion',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: dayjs().toISOString(),
      discussionId: crypto.randomUUID()
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  jobType: 'Public',
  isOpen: true,
  details: {
    name: 'Python Developer Needed for Full Stack Backned Rebuild',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  info: {
    minBudget: 500,
    maxBudget: 2000,
    type: 'Part-time',
    deadline: 'Nov 12',
    applicant: 7
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'TailwindCSS'
  }],
  applicant: [{
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Jordan Park',
      username: 'jordanpark',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'UI Developer'
    },
    stats: {
      rating: 4.2,
      jobsDone: 9
    },
    application: {
      status: 'reviewed',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'Frontend Developer'
    },
    stats: {
      rating: 4,
      jobsDone: 12
    },
    application: {
      status: 'new',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: null,
      shortlistedAt: null,
      discussionStartedAt: null,
      discussionId: null
    }
  }, {
    id: crypto.randomUUID(),
    profile: {
      name: 'Michael Cole',
      username: 'michaelcole',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      image: '/profile.png',
      title: 'React Developer'
    },
    stats: {
      rating: 4.6,
      jobsDone: 20
    },
    application: {
      status: 'in discussion',
      coverMessage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ducimus quos tempore, sit eligendi doloremque cum laborum quia ipsa repudiandae excepturi consequatur recusandae consequuntur vero rem sequi laboriosam, natus maiores!',
      appliedAt: dayjs().toISOString(),
      reviewedAt: dayjs().toISOString(),
      shortlistedAt: dayjs().toISOString(),
      discussionStartedAt: dayjs().toISOString(),
      discussionId: crypto.randomUUID()
    }
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  jobType: 'Personal Invite',
  isOpen: true,
  details: {
    name: 'React Developer Needed - Part-time',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  info: {
    minBudget: 500,
    maxBudget: 2000,
    type: 'Long-Term Contract',
    deadline: 'Nov 12',
    applicant: 7
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'TailwindCSS'
  }],
  applicant: []
}]