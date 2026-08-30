import dayjs from "../../lib/dayjs";

export const ChatLists = [{
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    title: 'Full Stack Developer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().subtract(10, 'day').toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hello, Good Day!',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().subtract(3, 'day').toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().subtract(1, 'day').toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hi, how is everythin?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Team',
    username: 'leviteamdev',
    title: 'Full Stack Team Dev',
    accountType: 'Team',
    isOnline: true,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Good day, how is your day going?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning, it is going pretty cool and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Ahh everywhere clear, we thank God',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Alright that is cool',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'So about your project you want us to discuss, any update?',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Akachukwu Recruiter',
    username: 'acharecrui',
    title: 'Dev Agency',
    accountType: 'Recruiter',
    isOnline: false,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day Mr Levi.',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Goof day, hope you are great?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah and thank you',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'No problem, so how can I be of service today?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Actually, I want you to work on a project for me...',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, that is cool, so tell me more about it',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'it is an ecommerce website for my brand',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, more, i still need to know the scope and full context of the website',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah I will send it all you to... but what is your pricr?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Well, that depends on the scope and how complex the project is...',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Okay well my budget is $2K, we will talk more later after i send the full scope',
      isRead: true
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Chindinma Precious',
    username: 'chindinmaprecious',
    title: 'SaaS Company',
    accountType: 'Recruiter',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Hello, Good Day!, I have a project i want you to work for me, and i will like us to discuss further',
      isRead: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Also, i have a budget of $4K, and i personally love your work, that is why i am reaching out to you',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Okpon Charls',
    username: 'okponcharls',
    title: 'Frontend Dev',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Good day, how is your day going?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning, it is going pretty cool and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Ahh everywhere clear, we thank God',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Alright that is cool',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'So about your project you want us to discuss, any update?',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Sonto Aboi',
    username: 'sontoaboi',
    title: 'UI/UX Designer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hi, goodday, would you mind to work with me on a project? i would love us to collaborate on a project and work on it together..',
      isSeen: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Stack Dev',
    username: 'stackdev',
    title: 'Design Agency',
    accountType: 'Team',
    isOnline: false,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day Mr Levi.',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Goof day, hope you are great?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah and thank you',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'No problem, so how can I be of service today?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Actually, I want you to work on a project for me...',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, that is cool, so tell me more about it',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'it is an ecommerce website for my brand',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, more, i still need to know the scope and full context of the website',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah I will send it all you to... but what is your pricr?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Well, that depends on the scope and how complex the project is...',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Okay well my budget is $2K, we will talk more later after i send the full scope',
      isRead: true
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Faith Blessing',
    username: 'faithblessing',
    title: 'Job Recruiter',
    accountType: 'Recruiter',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day, I am messaging because i want you to help me work on this project',
      isRead: false
    }
  }],
  project: {
    id: crypto.randomUUID(),
    details: {
      image: '',
      title: 'NodeJs Backend Developer Needed',
      description: 'Building a real-time fintech dashboard with portfolioa analytics, transaction tracking, and custom charting.',
      location: 'Remote',
      projectType: 'Long Term Contract',
      offered: {
        min: 4000,
        max: 13500
      }
    }
  }
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'David Desmon',
    username: 'daviddesmon',
    title: 'Backend Developer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Good day, how is your day going?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning, it is going pretty cool and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Ahh everywhere clear, we thank God',
      isSeen: true
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    title: 'Full Stack Developer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hello, Good Day!',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hi, how is everythin?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Team',
    username: 'leviteamdev',
    title: 'Full Stack Team Dev',
    accountType: 'Team',
    isOnline: true,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Good day, how is your day going?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning, it is going pretty cool and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Ahh everywhere clear, we thank God',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Alright that is cool',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'So about your project you want us to discuss, any update?',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Akachukwu Recruiter',
    username: 'acharecrui',
    title: 'Dev Agency',
    accountType: 'Recruiter',
    isOnline: false,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day Mr Levi.',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Goof day, hope you are great?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah and thank you',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'No problem, so how can I be of service today?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Actually, I want you to work on a project for me...',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, that is cool, so tell me more about it',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'it is an ecommerce website for my brand',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, more, i still need to know the scope and full context of the website',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah I will send it all you to... but what is your pricr?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Well, that depends on the scope and how complex the project is...',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Okay well my budget is $2K, we will talk more later after i send the full scope',
      isRead: true
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Chindinma Precious',
    username: 'chindinmaprecious',
    title: 'SaaS Company',
    accountType: 'Recruiter',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Hello, Good Day!, I have a project i want you to work for me, and i will like us to discuss further',
      isRead: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Also, i have a budget of $4K, and i personally love your work, that is why i am reaching out to you',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Okpon Charls',
    username: 'okponcharls',
    title: 'Frontend Dev',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Good day, how is your day going?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good Morning, it is going pretty cool and you?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Ahh everywhere clear, we thank God',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Alright that is cool',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'All is well, we blessed god and you?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'So about your project you want us to discuss, any update?',
      isRead: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Sonto Aboi',
    username: 'sontoaboi',
    title: 'UI/UX Designer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: false
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Hi, goodday, would you mind to work with me on a project? i would love us to collaborate on a project and work on it together..',
      isSeen: false
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Stack Dev',
    username: 'stackdev',
    title: 'Design Agency',
    accountType: 'Team',
    isOnline: false,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day Mr Levi.',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Goof day, hope you are great?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah and thank you',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'No problem, so how can I be of service today?',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Actually, I want you to work on a project for me...',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, that is cool, so tell me more about it',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'it is an ecommerce website for my brand',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Okay, more, i still need to know the scope and full context of the website',
      isSeen: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Yeah I will send it all you to... but what is your pricr?',
      isRead: true
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'sender',
      text: 'Well, that depends on the scope and how complex the project is...',
      isSeen: false
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Okay well my budget is $2K, we will talk more later after i send the full scope',
      isRead: true
    }
  }]
}, {
  id: crypto.randomUUID(),
  type: 'Request',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Faith Blessing',
    username: 'faithblessing',
    title: 'Job Recruiter',
    accountType: 'Recruiter',
    isOnline: true,
    isVerified: true
  },
  messages: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    updatedAt: null,
    details: {
      sender: 'user',
      text: 'Good day, I am messaging because i want you to help me work on this project',
      isRead: false
    }
  }],
  project: {
    id: crypto.randomUUID(),
    details: {
      image: '',
      title: 'NodeJs Backend Developer Needed',
      description: 'Building a real-time fintech dashboard with portfolioa analytics, transaction tracking, and custom charting.',
      location: 'Remote',
      projectType: 'Long Term Contract',
      offered: {
        min: 4000,
        max: 13500
      }
    }
  }
}, {
  id: crypto.randomUUID(),
  type: 'Direct',
  user: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Dorris Annah',
    username: 'doranah',
    title: 'Full Stack Developer',
    accountType: 'Freelancer',
    isOnline: true,
    isVerified: true
  },
  messages: []
}]