import styles from '../styles/Home.module.css'
import {useSelector} from "react-redux";
import {initStore} from "../redux/store";
import withRedux from 'next-redux-wrapper';
import UsersList from "../components/FilterBar/UsersList";
import {fetchUsers} from "../redux/asyncActions/users";
import {fetchOrders} from "../redux/asyncActions/fetchOrders";

function Home() {

  const users = useSelector(({users}) => users.users);
  const orders = useSelector(({orders}) => orders.orders);

  return (
    <div className={styles.container}>
      <UsersList users={users} />
      {orders.map(order => {
        return <div key={order.id}>{order.title}</div>
      })}
    </div>
  )
}

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchUsers());
  await store.dispatch(fetchOrders());
};

export default withRedux(initStore)(Home)



// export const getStaticProps = async () => {
//
//   return {
//     props: {usersFromProps: users}
//   }
// }