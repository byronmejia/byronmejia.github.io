export type CSSVariableTypes =
    | 'primaryBackground'
    | 'secondaryBackground'
    | 'primaryColor'
    | 'secondaryColor'
    | 'primaryHighlight'
    | 'secondaryHighlight';
export type ThemeRecord = Readonly<Record<CSSVariableTypes, string>>;

export const PrimaryTheme: ThemeRecord = {
    primaryBackground: '#171219',
    secondaryBackground: '#EA526F',
    primaryColor: '#f9faf1',
    secondaryColor: '#46B1E9',
    primaryHighlight: '#EF6F6C',
    secondaryHighlight: '#56E39F',
};
export default PrimaryTheme;

export const SecondaryTheme: ThemeRecord = {
    primaryBackground: PrimaryTheme.primaryColor,
    secondaryBackground: PrimaryTheme.secondaryColor,
    primaryColor: '#000000',
    secondaryColor: PrimaryTheme.secondaryBackground,
    primaryHighlight: PrimaryTheme.secondaryHighlight,
    secondaryHighlight: PrimaryTheme.primaryHighlight,
};
