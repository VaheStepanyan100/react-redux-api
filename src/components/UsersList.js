import { useSelector } from 'react-redux';

const UsersList = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (error !== undefined) {
    return (
      <div>
        Something wengt wrong:
        {error}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
