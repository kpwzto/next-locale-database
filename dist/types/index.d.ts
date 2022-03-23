interface ILocale {
    getLang: (str: unknown, forceLang?: string) => string;
}
declare type TOptions = {
    revert?: boolean;
};
export default function useLocale(options?: TOptions): ILocale;
export {};
//# sourceMappingURL=../../src/app/index.d.ts.map