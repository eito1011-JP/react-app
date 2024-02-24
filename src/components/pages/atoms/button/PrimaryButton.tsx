import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;

}
export const PrimaryButton: FC<Props> = memo((props) => {
    const { children, onClick, disabled = false, loading = false } = props;
    console.log({disabled});
    return (
        <Button  bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick} isDisabled={disabled || loading} isLoading={loading}>
            {children}
        </Button>
    );
});
