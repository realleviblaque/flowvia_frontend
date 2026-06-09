import dayjs from "dayjs";

export const TeamChats = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(4, 'day').toISOString(),
  Chats: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Amara Osei'
    },
    role: 'Designer',
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque culpa repellendus, error quo aspernatur saepe distinctio commodi, molestias ab optio earum reiciendis adipisci nam quae minus unde aliquid itaque doloribus.',
    project: {
      title: 'Findash design system',
      phase: 'Phase 3 - Component Library Complete',
      totalPhase: 4,
      completedPhase: 3,
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Kofi Mensah'
    },
    role: 'Backend Dev',
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque culpa repellendus, error quo aspernatur saepe distinctio commodi, molestias ab optio earum.'
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Levi Blaque'
    },
    role: 'Owner',
    message: 'Alright great job!'
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().subtract(1, 'day').toISOString(),
  Chats: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Levi Blaque'
    },
    role: 'Owner',
    message: 'Morning everyone, Quick standup - lets aim to have thr frontend connected to Kofi API by end of the week. Amara, can you share the figma tokens file too so i can pull the design system into TailwindCSS?'
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Amara Osei'
    },
    role: 'Designer',
    message: 'On it! Tokens file is ready. Sharing it noe.',
    file: {
      name: 'flowvia-design-tokens.json',
      size: '18.4 KB',
      type: 'JSON'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Tunde Nwosu'
    },
    role: 'Motion Dev',
    message: 'I am wrapping the animation system today - all the page transitions and micro-interactions. Should be clean by the EOD, also Levi, the useProjectPhase hook is ready, push it to the staging when you get a chance'
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Levi Blaque'
    },
    role: 'Owner',
    message: 'Perfect. I will pull the tokens and hook now. Lets get everything connected before the client review on Friday. If anyone gets blocked, ping me here'
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  Chats: [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Zara Tanaka'
    },
    role: 'Frontend Dev',
    message: 'How is the progress Guys?'
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    sender: {
      id: crypto.randomUUID(),
      profile: '/profile.png',
      name: 'Levi Blaque'
    },
    role: 'Owner',
    message: 'Going Pretty Well, let just keep buildig...'
  }]
}];