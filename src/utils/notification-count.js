export function notificationCount(notification) {
  const all = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read).length, 0
  )
  const hire = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read && item.type === 'hire request').length, 0
  )
  const work = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read && item.type === 'work circle').length, 0
  )
  const project = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read && item.type === 'project').length, 0
  )
  const mention = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read && item.type === 'mention').length, 0
  )
  const review = notification.reduce((count, group) =>
    count + group.contents.filter(item => !item.read && item.type === 'review').length, 0
  )

  return {all, hire, work, project, mention, review}
}