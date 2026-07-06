import dayjs from "dayjs";

export const posts = /* JSON.parse(localStorage.getItem('post')) || */ [{
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Recruiter',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  postProject: {
    title: 'Nest.js, React.js & PHP Dev Needed ',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    minBud: 400,
    maxBud: 2,
    deadline: 'June 20, 2026',
  },
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Team',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  postImg: '/profile.png',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Freelancer',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  postProject: {
    title: 'Full Stack Developer Needed',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    minBud: 400,
    maxBud: 2,
    deadline: 'June 20, 2026',
  },
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Recruiter',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  postImg: '',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Freelancer',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  postProject: {
    title: 'Full Stack Developer Needed',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    image: '/profile.png',
    minBud: 400,
    maxBud: 2,
    deadline: 'June 20, 2026',
  },
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Levi Blaque',
  username: 'realleviblaque',
  accountType: 'Team',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  postProject: {
    title: 'Full Stack Developer Needed',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    image: '/profile.png',
    minBud: 400,
    maxBud: 2,
    deadline: 'June 20, 2026',
  },
  likes: 0,
  share: 0
}, {
  id: crypto.randomUUID(),
  userImg: '/profile.png',
  user: 'Chinoso Chimuanya',
  username: 'realchinosochimuanaya',
  accountType: 'Freelancer',
  postTime: '09:45 AM',
  postDate: 'Febuary 02, 2026',
  postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
  comments: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levite',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }],
  postProject: {
    title: 'React Native Developer Needed',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    minBud: 400,
    maxBud: 2,
    deadline: 'June 20, 2026',
  },
  likes: 0,
  share: 0
}];

export function savePosts() {
  localStorage.setItem('post', JSON.stringify(posts))
}