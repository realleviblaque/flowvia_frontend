import dayjs from "../../lib/dayjs"

/* 
  Category Systems
  - social
  - messages
  - hiring
  - jobs 
  - projects
  - work
  - work_circle
  - reviews
  - portfolio
  - teams
  - payments
  - accoun
  - security
  - system

  Priority
  - low
  - normal
  - high
  - critical
*/

export const Notifications = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'social',
  type: 'post',
  action: 'liked',
  priority: 'low',
  link: '/post/post_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'post',
    id: crypto.randomUUID(),
    name: 'Building Flowvi Publicly'
  },
  metadata: {

  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'social',
  type: 'post',
  action: 'commented',
  priority: 'normal',
  link: '/post/post_id?comment=comment_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Sara Johnson',
    username: 'sarahohnson',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: false
  },
  target: {
    type: 'post',
    id: crypto.randomUUID(),
    name: 'Building Flowvia publicly'
  },
  metadata: {
    commentId: crypto.randomUUID(),
    commentPreview: 'This is looking impresived'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'social',
  type: 'comment',
  action: 'replied',
  priority: 'normal',
  link: '/post/post_id?comment=comment_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'John Smith',
    username: 'johnsmith',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'comment',
    id: crypto.randomUUID(),
    name: 'Your Comment Text...'
  },
  metadata: {
    postId: crypto.randomUUID(),
    replyId: crypto.randomUUID(),
    replyPreview: 'I completly agree with you'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'social',
  type: 'user',
  action: 'followed',
  priority: 'low',
  link: '/profile/mikeadams',
  actor: {
    id: crypto.randomUUID(),
    name: 'Mike Adams',
    username: 'mikeadams',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'user',
    id: crypto.randomUUID(),
    name: 'You'
  },
  metadata: {}
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'social',
  type: 'user',
  action: 'followed',
  priority: 'low',
  link: '/profile/davidwilson',
  actor: {
    id: crypto.randomUUID(),
    name: 'David Wilson',
    username: 'davidwilson',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'user',
    id: crypto.randomUUID(),
    name: 'You'
  },
  metadata: {
    isFollowedBack: true
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(15, 'day').toISOString(),
  readAt: null,
  category: 'messages',
  type: 'message',
  action: 'received',
  priority: 'normal',
  link: 'message/chat_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'chat',
    id: crypto.randomUUID(),
    name: 'Levi Blaque'
  },
  metadata: {
    messageId: crypto.randomUUID(),
    messagePreview: 'Hey, i want to dsicuss..'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'messages',
  type: 'message_request',
  action: 'received',
  priority: 'normal',
  link: '/messages?request=request_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'James Carter',
    username: 'jamescarter',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: false
  },
  target: {
    type: 'message_request',
    id: crypto.randomUUID(),
    name: 'Message Request'
  },
  metadata: {
    messagePreview: 'Hello, I would like to work with you'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'hiring',
  type: 'hire_request',
  action: 'received',
  priority: 'high',
  link: '/hire-request/hire_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Emma Williams',
    username: 'emmawilliams',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'hire_request',
    id: crypto.randomUUID(),
    name: 'Website Development'
  },
  metadata: {
    projectTitle: 'Company Website Redesign',
    budget: 50000,
    deadline: dayjs().add(2, 'month').subtract(12, 'day').toISOString(),
    currency: 'USD'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'work_circle',
  type: 'rehire-request',
  action: 'received',
  priority: 'high',
  link: '/hire-request/rehire_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'hire-request',
    id: crypto.randomUUID(),
    name: 'Monile Application Developmetn'
  },
  metadata: {
    isWorkCircleConnections: true,
    previousProjectId: crypto.randomUUID(),
    previousProjectName: 'Flowvia Dashboard'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'hiring',
  type: 'project',
  action: 'hired',
  priority: 'high',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Emma Williams',
    username: 'emmawilliams',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'project',
    id: crypto.randomUUID(),
    name: 'Company Website Redesign'
  },
  metadata: {
    role: 'Frontend Developer'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'jobs',
  type: 'application',
  action: 'received',
  priority: 'high',
  link: '/jobs/job_id/applicants',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Okafor',
    username: 'danielokafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'job',
    id: crypto.randomUUID(),
    name: 'React Frontend Developer'
  },
  metadata: {
    applicationId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'jobs',
  type: 'application',
  action: 'accepted',
  priority: 'high',
  link: '/jobs/job_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Tech Company',
    username: 'techcompany',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'job',
    id: crypto.randomUUID(),
    name: 'Nodejs Backend Developer'
  },
  metadata: {
    applicationId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  readAt: null,
  category: 'work_circle',
  type: 'job',
  action: 'created',
  priority: 'normal',
  link: '/jobs/job_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Sarah Williams',
    username: 'sarahwilliams',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'job',
    id: crypto.randomUUID(),
    name: 'Full Stack Developer Needed'
  },
  metadata: {
    isWorkCirclePriority: true
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'projects',
  type: 'project',
  action: 'created',
  priority: 'normal',
  link: '/ptojects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Emma Williams',
    username: 'emmawilliams',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'project',
    id: crypto.randomUUID(),
    name: 'E-commerce Platform'
  },
  metadata: {
    projectType: 'Public Project'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'projects',
  type: 'project',
  action: 'on_hold',
  priority: 'high',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Doris Team',
    username: 'doristeam',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'projects',
    id: crypto.randomUUID(),
    name: 'E-commerce Platform'
  },
  metadata: {
    reason: 'Awaiting for pending payments'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'projects',
  type: 'project',
  action: 'completed',
  priority: 'high',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Okafor',
    username: 'danielofafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'project',
    id: crypto.randomUUID(),
    name: 'E-commerce Platform'
  },
  metadata: {

  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'work',
  type: 'milestone',
  action: 'completed',
  priority: 'normal',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Okafor',
    username: 'danielofafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'milestone',
    id: crypto.randomUUID(),
    name: 'Frontend Development'
  },
  metadata: {
    completedMilestone: 1,
    projectId: crypto.randomUUID(),
    projectName: 'E-commerce Platform'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'work',
  type: 'phase',
  action: 'completed',
  priority: 'normal',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Ofafor',
    username: 'danielofafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'phase',
    id: crypto.randomUUID(),
    name: 'UI Implementation'
  },
  metadata: {
    completedPhase: 1,
    projectId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'work',
  type: 'task',
  action: 'completed',
  priority: 'normal',
  link: '/projects/project_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Ofafor',
    username: 'danielokafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'task',
    id: crypto.randomUUID(),
    name: 'Build Notification UI'
  },
  metadata: {
    completedTask: 1,
    projectId: crypto.randomUUID(),
    phaseId: crypto.randomUUID(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'reviews',
  type: 'review',
  action: 'received',
  priority: 'high',
  link: '/profile/reviews',
  actor: {
    id: crypto.randomUUID(),
    name: 'Emma Williams',
    username: 'emmawilliams',
    image: '/profile.png',
    accountType: 'Recruiter',
    isVerified: true
  },
  target: {
    type: 'project',
    id: crypto.randomUUID(),
    name: 'E-commerce Platform'
  },
  metadata: {
    reviewId: crypto.randomUUID(),
    rating: 5,
    reviewPreview: 'Daniel was excellent to work with'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'reviews',
  type: 'review',
  action: 'replied',
  priority: 'normal',
  link: '/profile/reviews?review=review_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Daniel Ofafor',
    username: 'danielokafor',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'review',
    id: crypto.randomUUID(),
    name: 'Project Review'
  },
  metadata: {
    replyId: crypto.randomUUID(),
    replyPreview: 'Thank you, i really enjoyed working with you'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'portfolio',
  type: 'project',
  action: 'added',
  priority: 'low',
  link: '/profile/portfolio',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: '',
    isVerified: true
  },
  target: {
    type: 'portfolio_project',
    id: crypto.randomUUID(),
    name: 'E-commerce Platform'
  },
  metadata: {
    projectId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'team',
  action: 'created',
  priority: 'high',
  link: '/teams/team_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {

  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'invitation',
  action: 'received',
  priority: 'high',
  link: '/teams/invitation/invite_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    role: 'Frontend Developer',
    invitationId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'member',
  action: 'joined',
  priority: 'normal',
  link: '/teams/team_id/members',
  actor: {
    id: crypto.randomUUID(),
    name: 'Sarah Jognson',
    username: 'sarajohnson',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    role: 'UI Designer'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'join_request',
  action: 'received',
  priority: 'high',
  link: '/teams/team_id/requests',
  actor: {
    id: crypto.randomUUID(),
    name: 'Michael Brown',
    username: 'michaelbrown',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    requestId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'task',
  action: 'assigned',
  priority: 'high',
  link: '/teams/team_id/tasks/task_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'task',
    id: crypto.randomUUID(),
    name: 'Build Notification System'
  },
  metadata: {
    teamId: crypto.randomUUID(),
    projectId: crypto.randomUUID(),
    dueDate: dayjs().add(4, 'day').toISOString()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'availability',
  action: 'changed',
  priority: 'low',
  link: '/teams/team_id/member/member_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'James Carter',
    username: 'jamescarter',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    previousStatus: 'Status',
    newStatus: 'Available'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'member',
  action: 'removed',
  priority: 'high',
  link: '/teams/team_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    removeMemberId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'role',
  action: 'assigned',
  priority: 'normal',
  link: '/teams/team_id/members',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvi Team'
  },
  metadata: {
    role: 'ProjectManager'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'ownership',
  action: 'transferred',
  priority: 'critical',
  link: '/teams/team_id/settings',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    previousOwnerId: crypto.randomUUID(),
    newOwnerId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'teams',
  type: 'team',
  action: 'deleted',
  priority: 'critical',
  link: '/teams',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaqye',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: false
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    deletedAt: dayjs().toISOString()
  }
}, {
  // 11 Payment Notification
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'payments',
  type: 'withdrawal',
  action: 'requested',
  priority: 'high',
  link: '/wallet/transaction',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'withdrawal',
    id: crypto.randomUUID(),
    name: 'withdrawal'
  },
  metadata: {
    amount: 5000,
    currency: 'USD'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'payments',
  type: 'withdrawal',
  action: 'completed',
  priority: 'high',
  link: '/wallet/transaction/_id',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'withdrawal',
    id: crypto.randomUUID(),
    name: 'withdrawal'
  },
  metadata: {
    amount: 5000,
    currency: 'USD',
    transactionId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'payments',
  type: 'team_withdrawal',
  action: 'completed',
  priority: 'high',
  link: '/teams/team_id/finance',
  actor: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    username: 'realleviblaque',
    image: '/profile.png',
    accountType: 'Team',
    isVerified: true
  },
  target: {
    type: 'team',
    id: crypto.randomUUID(),
    name: 'Flowvia Team'
  },
  metadata: {
    amount: 8000,
    currency: 'USD',
    transactionId: crypto.randomUUID()
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'payments',
  type: 'payment_method',
  action: 'changed',
  priority: 'high',
  link: '/settings/payments',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: true
  },
  target: {
    type: 'payment_method',
    id: crypto.randomUUID(),
    name: 'Bank Account'
  },
  metadata: {
    paymentMethod: 'Bank Account'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'account',
  type: 'profile',
  action: 'updated',
  priority: 'low',
  link: '/settings/profile',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'profile',
    id: crypto.randomUUID(),
    name: 'Your Profile'
  },
  metadata: {
    updatedField: ['name', 'bio']
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'account',
  type: 'email',
  action: 'changed',
  priority: 'high',
  link: '/setings/account',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'account',
    id: crypto.randomUUID(),
    name: 'Your Account'
  },
  metadata: {
    previousEmail: 'old@gmail.com',
    newEmail: 'new@gmail.com'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'account',
  type: 'phone',
  action: 'changed',
  priority: 'high',
  link: '/setings/account',
  actor: {
    id: crypto.randomUUID(),
    name: 'You',
    username: '',
    image: '/profile.png',
    accountType: 'Freelancer',
    isVerified: false
  },
  target: {
    type: 'account',
    id: crypto.randomUUID(),
    name: 'Your Account'
  },
  metadata: {

  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'account',
  type: 'subscription',
  action: 'updated',
  priority: 'normal',
  link: '/settigns/subscription',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'subscription',
    id: crypto.randomUUID(),
    name: 'Flowvia Pro'
  },
  metadata: {
    previousPlan: 'Free',
    newPlan: 'Pro'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'security',
  type: 'login',
  action: 'new_device',
  priority: 'critical',
  link: '/settings/security',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia Security',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'account',
    id: crypto.randomUUID(),
    name: 'Your Account'
  },
  metadata: {
    device: 'Chrome on Android',
    location: 'Lagos, Nigeria'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'security',
  type: 'password',
  action: 'changed',
  priority: 'critical',
  link: '/settings/security',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia Security',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'account',
    id: crypto.randomUUID(),
    name: 'Your Account'
  },
  metadata: {

  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'system',
  type: 'feature',
  action: 'released',
  priority: 'normal',
  link: '/updates',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'feature',
    id: crypto.randomUUID(),
    name: 'Teams'
  },
  metadata: {
    description: 'You can now create and manage teams on Flowvia'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  readAt: null,
  category: 'system',
  type: 'maintenance',
  action: 'scheduled',
  priority: 'high',
  link: '/status',
  actor: {
    id: crypto.randomUUID(),
    name: 'Flowvia',
    username: 'flowvia',
    image: '/profile.png',
    accountType: 'System',
    isVerified: true
  },
  target: {
    type: 'maintainance',
    id: crypto.randomUUID(),
    name: 'Scheduled Maintenance'
  },
  metadata: {
    startTime: dayjs().add(8, 'minute').toISOString(),
    estimatedDuration: '30 minutes'
  }
}]