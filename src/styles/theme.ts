export type CSSVariableTypes = 'primaryBackground' | 'primaryColor';
export type ThemeRecord = Readonly<Record<CSSVariableTypes, string>>;

export const PrimaryTheme: ThemeRecord = {
    primaryBackground: '#635ee3',
    primaryColor: '#f9faf1',
};
export default PrimaryTheme;

export const SecondaryTheme: ThemeRecord = {
    primaryBackground: PrimaryTheme.primaryColor,
    primaryColor: '#000000',
};
