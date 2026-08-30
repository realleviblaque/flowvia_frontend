import dayjs from "../../lib/dayjs"
import formatCount from "../../utils/formatCount"

export function FreelancerWorkHistory({freelancer}) {
  return (
    freelancer.history.map((history) => {
      return (
        <div key={history.id} className="job-histoy-wrap">
          <div className="left">
            <span></span>
            <p className="title">{history.title}</p>
          </div>
          <div className="right">
            <p className="date">{dayjs(history.createdAt).format('MMM YYYY')}</p>
            <p className="amount-paid">${formatCount(history.amount)}</p>
            <span className="status">Completed</span>
          </div>
        </div>
      )
    })
  )
}
export function ClientWorkHistory({client}) {
  return (
    client.history.map((history) => {
      return (
        <div key={history.id} className="job-histoy-wrap">
          <div className="left">
            <span></span>
            <p className="title">{history.title}</p>
          </div>
          <div className="right">
            <p className="date">{dayjs(history.createdAt).format('MMM YYYY')}</p>
            <p className="amount-paid">${formatCount(history.amount)}</p>
            <span className="status">Completed</span>
          </div>
        </div>
      )
    })
  )
}


export function WorkHistorySetup(workType) {
  let amount = 0;
  let jobTotal = 0;
  const date = dayjs(workType.history[0].createdAt).format('MMM YYYY'); // the last history will be the first to display so we will use .unshift() to add the new history
  workType.history.forEach((f) => {
    jobTotal++;
    amount += f.amount;
  })

  return {amount, jobTotal, date};
}