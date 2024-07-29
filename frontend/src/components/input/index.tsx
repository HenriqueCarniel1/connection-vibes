import { twMerge } from "tailwind-merge";

type Props = {
    styles?: string,
    type: string,
    placeholderName: string
}

function Input({ styles, type, placeholderName }: Props) {
    return (
        <input type={type} placeholder={placeholderName} className={twMerge(
            'h-7',styles
        )} />
    );
}

export default Input;
