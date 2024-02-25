// useLoginUser.ts
import { useContext } from "react";
    import { LoginUserContext, LoginUserContextType } from "./providors/useLoginUserProvider";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
