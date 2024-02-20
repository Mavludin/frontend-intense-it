export const Jobs = ({ jobs }) => {
    return (
      <ul>
        {jobs.map((job) => <div key={job}>JOB: {job}</div>)}
      </ul>
    )
}
  