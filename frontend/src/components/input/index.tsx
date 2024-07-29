import { twMerge } from "tailwind-merge";

type Props = {
    styles?: string,
    type: string,
}

function Input({ styles, type }: Props) {
    return (
        <input type={type} className={twMerge(
            styles
        )} />
    );
}

export default Input;
