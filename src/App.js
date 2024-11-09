import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";
import "./components/UserCard.css";
import mockData from "./mockData";

const App = () => {
  const [users, setUsers] = useState(mockData);
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          age={user.age}
          info={user.info}
          imageUrl={user.imageUrl}
          onClose={() => removeUser(user.id)}
        />
      ))}
    </div>
  );
};

export default App;
