import s from './users.module.css'


const UsersList = ({users=[]}) => {
  return (
  <div>
    {users.map(({id, name, email, phone}) => (
      <div key={id} className={s.userBlock}>
        <h5>{name}</h5>
        <h6>Email: {email}</h6>
        <h6>Phone: {phone}</h6>
      </div>
    ))}
  </div>
  )
}

export default UsersList