import dayjs from '../../lib/dayjs'

export const Projects = [{
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'On Hold',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: true,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: true,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'On Hold',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: true,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: true,
  linkToProject: 'https://myportfolio.dev',
  status: 'On Hold',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-02-18').toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'On Hold',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: false,
  linkToProject: 'https://myportfolio.dev',
  status: 'In Progress',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Personal',
  inPortfolio: true,
  linkToProject: null,
  status: 'Completed',
  details: {
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    duration: '1 Week',
  },
  phases: {
    total: 8,
    completed: 8
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  projectType: 'Client',
  inPortfolio: true,
  linkToProject: 'https://myportfolio.dev',
  status: 'On Hold',
  details: {
    image: '/profile.png',
    title: 'Building E-Commerce Website Landing Page',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non quae dolorem reiciendis similique obcaecati odio esse exercitationem tempora nihil? Reiciendis ipsam incidunt quaerat eveniet nihil sint dolores maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos omnis quasi autem. Alias, quaerat quam. Fugit animi odit in itaque consequuntur quos eum alias? Quisquam optio quaerat mollitia cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex tempora, minus explicabo placeat nulla vitae, voluptate aspernatur aperiam earum necessitatibus voluptatum incidunt dolores ratione ad totam aut. Natus, dignissimos.'
  },
  info: {
    budget: {
      min: 600,
      max: 2500
    },
    duration: '1 Week',
    client: {
      id: crypto.randomUUID(),
      name: 'Ahmed Taiwo'
    }
  },
  phases: {
    total: 8,
    completed: 4
  }
}]