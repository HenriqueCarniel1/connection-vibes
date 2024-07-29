import { twMerge } from "tailwind-merge";

type Props = {
    styles?: string,
    contentValue:string
}

function Button({styles,contentValue}:Props) {
    return ( 
        <button className={twMerge(
            styles
        )}>
            {contentValue}
        </button>
     );
}

export default Button;