import { Jobs } from "../Jobs"

export const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            {user.age !== undefined && <div>Age: {user.age}</div>}
            
            {/* {user.jobs?.length > 0 && user.jobs.map((job) => {
              return (
                <div key={job}>JOB: {job}</div>
              )
            })} */}

            {user.jobs?.length > 0 && <Jobs jobs={user.jobs} />}
          </li>
        )
      })}
    </ul>
  )
}
