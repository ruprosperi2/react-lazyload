import {useState} from "react";
import {OnChangeArgs, Product} from "../interfaces/interfaces";

interface UseProdcutArgs {
    product: Product,
    onChange?: (args: OnChangeArgs) => void
}

export const useProduct = ({onChange}:UseProdcutArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prevState => Math.max(prevState + value, 0))

        onChange && onChange()
    }

    return {
        counter,
        increaseBy
    }
}

