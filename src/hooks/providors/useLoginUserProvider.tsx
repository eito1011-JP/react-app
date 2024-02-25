import { User } from "../../types/api/user";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type LoginUser = User & { isAdmin: boolean };
export type LoginUserContextType = {
    loginUser: LoginUser | null,
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
};

// createContextに適切なデフォルト値を設定
export const LoginUserContext  = createContext<LoginUserContextType>(
    {} as LoginUserContextType
);

export const LoginUserProvider = (props: {children: ReactNode}) => {
    const { children } = props;
    const [loginUser, setLoginUser] = useState<LoginUser | null>(null); // useStateに初期値nullを設定
    return (
        <LoginUserContext.Provider value={{  loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
};
