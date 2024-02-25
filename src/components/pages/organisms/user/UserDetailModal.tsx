import { FC, memo } from "react";
import { Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { User } from "../../../../types/api/user";

type Props = {
    user: User | null,
    isOpen: boolean,
    onClose: () => void
};

export const UserDetailModal: FC<Props> = memo(({ user, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={user?.username || ''} isReadOnly/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={user?.name || ''} isReadOnly/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Mail</FormLabel>
                                <Input value={user?.email || ''} isReadOnly/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>電話</FormLabel>
                                <Input value={user?.phone || ''} isReadOnly/>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
});
