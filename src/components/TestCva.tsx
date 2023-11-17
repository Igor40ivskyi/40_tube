import {cva} from "class-variance-authority";

const button = cva(["border border-black"], {
    variants: {
        variant1: {
            primary: ["bg-blue-400"],
            secondary: ["bg-red-400"],
        },
        size:{
            small: ["text-sm"],
            big: ["text-xl"],
        },
        xxx:{
            xxx1: ["text-amber-300"],
            xxx2: ['text-blue-700'],
        },
        defaultVariants:{
            variant1: "primary",
            size: "small",
        }
    }
});

console.log(button({variant1: "primary", size: "small",xxx:"xxx1"}));

export function TestCva() {
    return <button className={button({variant1: "primary", size: "big",xxx: "xxx2"})}>Test Cva</button>;
}