import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "../hooks/useMessages";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
    const history = useHistory();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const { setLoginUser } = useLoginUser();

    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    const isAdmin = res.data.id === 10 ? true : false;
                    setLoginUser({ ...res.data, isAdmin });
                    showMessage({ title: "ログインしました", status: "success" });
                    history.push("/home");
                } else {
                    showMessage({ title: "ユーザーが見つかりません", status: "error" });
                }
                setLoading(false); // ローディング状態を解除
            })
            .catch((error) => {
                const message = error.response?.data?.message || "ログインエラーが発生しました";
                showMessage({ title: message, status: "error" });
                setLoading(false); // ローディング状態を解除
            });
            
    }, [history, showMessage, setLoginUser]);

    return { login, loading };
};
