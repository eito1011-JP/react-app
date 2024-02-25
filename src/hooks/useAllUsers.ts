import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessages";

export const useAllUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);
    const { showMessage } = useMessage();

    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                // エラー処理
                showMessage({ title: 'ユーザー取得に失敗しました', status: "error" });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setUsers, showMessage]);

    return { getUsers, loading, users };
};
