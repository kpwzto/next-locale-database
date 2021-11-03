interface ILocale {
    getLang: (str: unknown) => string;
}
declare type TOptions = {
    revert?: boolean;
    forceLang?: string;
};
export default function useLocale(options?: TOptions): ILocale;
export {};
//# sourceMappingURL=../../src/app/index.d.ts.map