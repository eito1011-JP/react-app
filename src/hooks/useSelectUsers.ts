import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const onSelectedUser = useCallback((id: number, users: User[]) => {
        const targetUser = users.find((user) => user.id === id);
        setSelectedUser(targetUser || null);
    }, []);

    return { onSelectedUser, selectedUser };
};
