import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { User } from "../../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | null,
    isOpen: boolean,
    onClose: () => void,
    isAdmin?: boolean,
};

export const UserDetailModal: FC<Props> = memo(({ user, isOpen, onClose, isAdmin = false }) => {
    const onClickUpdate = () => alert();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setUsername(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    }, [user]);

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={2}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={username} onChange={onChangeName} isReadOnly={!isAdmin}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={name} onChange={onChangeUserName} isReadOnly={!isAdmin}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Mail</FormLabel>
                                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>電話</FormLabel>
                                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}/>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    {isAdmin && (
                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                    </ModalFooter>
                    )}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
});
