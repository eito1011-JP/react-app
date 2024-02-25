import { FC, memo, useCallback, useEffect } from "react";
import { Wrap, WrapItem, Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "./organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { UserDetailModal } from "./organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectedUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log({loginUser});


    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const onClickUser = useCallback((id: number) => {
        onSelectedUser(id, users);
        onOpen();
    }, [onSelectedUser, users, onOpen]);

    return (
        <>
        {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center>
        ) : (
            <Wrap p={{ base: 4, md: 10 }}>
                {users.map((user) => (
                    <WrapItem key={user.id} mx="auto">
                        <UserCard 
                            id={user.id}
                            imageUrl="https://source.unsplash.com/random" 
                            userName={user.username} 
                            fullName={user.name}
                            onClick={() => onClickUser(user.id)}
                        />
                    </WrapItem>
                ))}
            </Wrap>
        )}        
        <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose}/>
        </>
    );
});
