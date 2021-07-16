import React, { useEffect } from "react";
import useStore from "../store";

// type users = {
//   users: Users[];
// };

export default function HeaderSection() {
  const users = useStore((store) => store.users);
  const fetchUsers = useStore((store) => store.fetchUsers);
  const getSelectedUserId = useStore((store) => store.getSelectedUserId);
  const selectedUserId = useStore((store) => store.selectedUserId);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <header className="main-header">
      <div className="wrapper">
        {users.map((user, index: number) => (
          <div
            key={index}
            onClick={() => {
              getSelectedUserId(user.id);
            }}
            className={selectedUserId === user.id ? "chip active" : "chip"}
          >
            <div className="avatar-small">
              <img src={user.avatar} alt={user.username} />
            </div>
            <span>{user.username}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
