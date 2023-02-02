type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods:Mods, additional: string[]):string {
    return [
        cls,
        ...additional,
        console.log('1', Object.entries(mods)),
        ...Object.entries(mods).filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
    ].join(' ')
}


