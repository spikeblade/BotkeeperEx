import { number } from "zod"

export const normalized = (value: number|undefined): any => {
    if (typeof(value) === undefined){
        return 0
    }
    return value
}