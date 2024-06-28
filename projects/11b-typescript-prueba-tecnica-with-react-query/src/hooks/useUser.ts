import { fetchUsers } from "../services/users";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { type User } from "../types.d";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const {
    isLoading,
    isError,
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam = 0 }) => fetchUsers({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 3,
    initialPageParam: 0,
  });

  useEffect(() => {
    if (data) {
      const allUsers = data.pages.flatMap((page) => page.users);
      setUsers(allUsers);
    }
  }, [data]);

  const deleteUser = (email: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    users,
    hasNextPage,
    deleteUser,
    setUsers, // Export setUsers
  };
};
