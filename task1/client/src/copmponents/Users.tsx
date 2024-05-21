import { useCallback, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useAppContext } from "../hooks/useAppContext";
import { FetchedUser } from "../types/FetchedUser";
import { User } from "../types/User";

const Users = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { users, setUsers } = useAppContext();

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000`);
      if (!response.ok) throw new Error("Requert was unsuccessful");
      const result = await response.json();
      const formatted = result.map((item: FetchedUser) => {
        const user: User = {
          name: item.name,
          phone: item.phone,
          email: item.email,
          address: item.address,
          hireDate: item.hire_date,
          department: item.department,
          positionName: item.position_name,
        };
        return user;
      });
      setUsers(formatted);
    } catch (error) {
      let errorText = "Failed to fetch users.";
      if (error instanceof Error) errorText += ` Error: ${error.message}`;
      console.error(errorText);
    }
  }, [setUsers]);

  useEffect(() => {
    setIsLoading(true);
    getUsers();
    setIsLoading(false);
  }, [getUsers]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="users">
          {users?.map((user, index) => (
            <UserCard userData={user} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
