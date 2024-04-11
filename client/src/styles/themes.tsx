export interface ThemeProps{
    background: string;
    text: string;
    textHover: string;
}

export const darkTheme: ThemeProps = {
        background: "var(--dark-background)",
        text: "var(--dark-text)",
        textHover: "var(--dark-text-hover)",
}

export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
    textHover: "var(--light-text-hover)",
}