import dayjs from "dayjs";

export const posts = /* JSON.parse(localStorage.getItem('post')) || */ [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    profileImg: '/profile.png',
    accountType: 'Freelancer'
  },
  comment: [{
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
    likes: [],
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  postMilestone: [],
  postOpportunity: [{
    id: crypto.randomUUID(),
    title: 'Nest.js, React.js & PHP Dev Needed ',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    image: '/profile.png',
    minBud: 400,
    maxBud: 2000,
    deadline: 'June 20, 2026',
    location: 'remote',
    projectType: 'Long Term Contract'
  }],
  likes: [],
  share: 0,
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    profileImg: '/profile.png',
    accountType: 'Freelancer'
  },
  comment: [{
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
    likes: [],
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  postImage: '/profile.png',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Lee Cruiter',
    username: 'leecruiter',
    profileImg: '/profile.png',
    accountType: 'Recruiter'
  },
  comment: [{
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
    likes: [],
  }],
  postOpportunity: [{
    id: crypto.randomUUID(),
    title: 'Nest.js, React.js & PHP Dev Needed ',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    minBud: 400,
    maxBud: 2000,
    deadline: 'June 20, 2026',
    location: 'remote',
    projectType: 'Long Term Contract'
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    profileImg: '/profile.png',
    accountType: 'Recruiter'
  },
  comment: [{
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
    likes: [],
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod tot Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod tot',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levite Team',
    username: 'levite',
    profileImg: '/profile.png',
    accountType: 'Team'
  },
  comment: [{
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
    likes: [],
  }],
  postImage: '/profile.png',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    profileImg: '/profile.png',
    accountType: 'Freelancer'
  },
  comment: [{
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
    likes: [],
  }],
  postImage: '/profile.png',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    profileImg: '/profile.png',
    accountType: 'Team'
  },
  comment: [{
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
    likes: [],
  }],
  postOpportunity: [{
    id: crypto.randomUUID(),
    title: 'Nest.js, React.js & PHP Dev Needed ',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam!',
    minBud: 400,
    maxBud: 2000,
    deadline: 'June 20, 2026',
    location: 'remote',
    projectType: 'Long Term Contract'
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  likes: [],
  share: [],
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  audience: 'Everyone',
  sender: {
    id: crypto.randomUUID(),
    name: 'Chinoso Chimuanya',
    username: 'realchinosochimuanaya',
    profileImg: '/profile.png',
    accountType: 'Freelancer'
  },
  comment: [{
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
    likes: [],
  }],
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quaerat similique possimus a ut maiores cupiditate nisi quidem! Aut, molestiae. Aliquam eveniet tempore sapiente nihil libero recusandae voluptates quod totam',
  postImage: '/profile.png',
  likes: [],
  share: [],
}];

export function savePosts() {
  localStorage.setItem('post', JSON.stringify(posts))
}