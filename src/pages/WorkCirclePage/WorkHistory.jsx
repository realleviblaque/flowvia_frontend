import formatBudet from "../../utils/formatBudget"

export function FreelancerWorkHistory({freelancer}) {
  return (
    freelancer.workHistory.map((history) => {
      return (
        <div key={history.id} className="job-histoy-wrap">
          <div className="left">
            <span></span>
            <p className="title">{history.title}</p>
          </div>
          <div className="right">
            <p className="date">{history.date}</p>
            <p className="amount-paid">${formatBudet(history.amount)}</p>
            <span className="status">Completed</span>
          </div>
        </div>
      )
    })
  )
}
export function ClientWorkHistory({client}) {
  return (
    client.workHistory.map((history) => {
      return (
        <div key={history.id} className="job-histoy-wrap">
          <div className="left">
            <span></span>
            <p className="title">{history.title}</p>
          </div>
          <div className="right">
            <p className="date">{history.date}</p>
            <p className="amount-paid">${formatBudet(history.amount)}</p>
            <span className="status">Completed</span>
          </div>
        </div>
      )
    })
  )
}


export function WorkHistorySetup(workType) {
  const index = workType.workHistory.length;
  let amount = 0;
  let jobTotal = 0;
  const date = workType.workHistory[index - 1].date;
  workType.workHistory.forEach((f) => {
    jobTotal++;
    amount += f.amount;
  })

  return {amount, jobTotal, date};
}