'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme =
    // Dark themes
    | 'dark-plus'
    | 'monokai'
    | 'dracula'
    | 'night-owl'
    | 'one-dark'
    | 'tokyo-night'
    | 'nord'
    | 'gruvbox-dark'
    | 'material-dark'
    | 'palenight'
    | 'cobalt2'
    | 'synthwave'
    | 'github-dark'
    | 'ayu-dark'
    | 'horizon'
    // Light themes
    | 'light-plus'
    | 'solarized-light'
    | 'github-light'
    | 'ayu-light'
    | 'gruvbox-light';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to ensure contrast, typical VS Code borders are opaque
// Dark themes usually have borders darker than bg, or slightly lighter but subtle.
// Light themes have darker borders.

export const THEME_CONFIGS = {
    'dark-plus': {
        name: 'Dark+',
        category: 'Dark',
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        activityBar: '#333333',
        sideBar: '#252526',
        border: '#2b2b2b', // Subtle dark border
        comment: '#6a9955',
        keyword: '#569cd6',
        string: '#ce9178',
        number: '#b5cea8',
        function: '#dcdcaa',
        variable: '#9cdcfe',
        type: '#4ec9b0',
    },
    'light-plus': {
        name: 'Light+',
        category: 'Light',
        background: '#ffffff',
        foreground: '#000000',
        activityBar: '#2c2c2c',
        sideBar: '#f3f3f3',
        border: '#e5e5e5', // Subtle light border
        comment: '#008000',
        keyword: '#0000ff',
        string: '#a31515',
        number: '#098658',
        function: '#795e26',
        variable: '#001080',
        type: '#267f99',
    },
    'monokai': {
        name: 'Monokai Pro',
        category: 'Dark',
        background: '#2d2a2e',
        foreground: '#fcfcfa',
        activityBar: '#221f22',
        sideBar: '#221f22',
        border: '#19181a',
        comment: '#727072',
        keyword: '#ff6188',
        string: '#ffd866',
        number: '#ab9df2',
        function: '#a9dc76',
        variable: '#fcfcfa',
        type: '#78dce8',
    },
    'dracula': {
        name: 'Dracula',
        category: 'Dark',
        background: '#282a36',
        foreground: '#f8f8f2',
        activityBar: '#1e1f29', // Distinct
        sideBar: '#21222c',    // Distinct
        border: '#191a21',     // Darker border
        comment: '#6272a4',
        keyword: '#ff79c6',
        string: '#f1fa8c',
        number: '#bd93f9',
        function: '#50fa7b',
        variable: '#f8f8f2',
        type: '#8be9fd',
    },
    'night-owl': {
        name: 'Night Owl',
        category: 'Dark',
        background: '#011627',
        foreground: '#d6deeb',
        activityBar: '#011627',
        sideBar: '#011627',
        border: '#5f7e97', // Night Owl uses blueish borders
        comment: '#637777',
        keyword: '#c792ea',
        string: '#ecc48d',
        number: '#f78c6c',
        function: '#82aaff',
        variable: '#d7dbe0',
        type: '#addb67',
    },
    'one-dark': {
        name: 'One Dark',
        category: 'Dark',
        background: '#282c34',
        foreground: '#abb2bf',
        activityBar: '#21252b',
        sideBar: '#21252b',
        border: '#181a1f',
        comment: '#5c6370',
        keyword: '#c678dd',
        string: '#98c379',
        number: '#d19a66',
        function: '#61afef',
        variable: '#e06c75',
        type: '#e5c07b',
    },
    'tokyo-night': {
        name: 'Tokyo Night',
        category: 'Dark',
        background: '#1a1b26',
        foreground: '#a9b1d6',
        activityBar: '#16161e',
        sideBar: '#16161e',
        border: '#101014',
        comment: '#565f89',
        keyword: '#bb9af7',
        string: '#9ece6a',
        number: '#ff9e64',
        function: '#7aa2f7',
        variable: '#c0caf5',
        type: '#2ac3de',
    },
    'nord': {
        name: 'Nord',
        category: 'Dark',
        background: '#2e3440',
        foreground: '#d8dee9',
        activityBar: '#2e3440',
        sideBar: '#2e3440',
        border: '#3b4252', // Nord border
        comment: '#616e88',
        keyword: '#81a1c1',
        string: '#a3be8c',
        number: '#b48ead',
        function: '#88c0d0',
        variable: '#d8dee9',
        type: '#8fbcbb',
    },
    'gruvbox-dark': {
        name: 'Gruvbox Dark',
        category: 'Dark',
        background: '#282828',
        foreground: '#ebdbb2',
        activityBar: '#1d2021',
        sideBar: '#1d2021',
        border: '#3c3836',
        comment: '#928374',
        keyword: '#fb4934',
        string: '#b8bb26',
        number: '#d3869b',
        function: '#fabd2f',
        variable: '#83a598',
        type: '#fe8019',
    },
    'material-dark': {
        name: 'Material Dark',
        category: 'Dark',
        background: '#263238',
        foreground: '#eeffff',
        activityBar: '#263238',
        sideBar: '#263238',
        border: '#212B30',
        comment: '#546e7a',
        keyword: '#c792ea',
        string: '#c3e88d',
        number: '#f78c6c',
        function: '#82aaff',
        variable: '#eeffff',
        type: '#ffcb6b',
    },
    'palenight': {
        name: 'Material Palenight',
        category: 'Dark',
        background: '#292d3e',
        foreground: '#a6accd',
        activityBar: '#292d3e',
        sideBar: '#292d3e',
        border: '#202330',
        comment: '#676e95',
        keyword: '#c792ea',
        string: '#c3e88d',
        number: '#f78c6c',
        function: '#82aaff',
        variable: '#a6accd',
        type: '#ffcb6b',
    },
    'cobalt2': {
        name: 'Cobalt2',
        category: 'Dark',
        background: '#193549',
        foreground: '#ffffff',
        activityBar: '#15232d',
        sideBar: '#15232d',
        border: '#0d3a58', // Distinct blue border
        comment: '#0088ff',
        keyword: '#ff9d00',
        string: '#3ad900',
        number: '#ff628c',
        function: '#ffc600',
        variable: '#ffffff',
        type: '#80ffbb',
    },
    'synthwave': {
        name: 'SynthWave \'84',
        category: 'Dark',
        background: '#2b213a',
        foreground: '#ffffff',
        activityBar: '#262335',
        sideBar: '#241b2f',
        border: '#1f1625',
        comment: '#848bbd',
        keyword: '#ff7edb',
        string: '#f97e72',
        number: '#f97e72',
        function: '#fede5d',
        variable: '#72f1b8',
        type: '#36f9f6',
    },
    'github-dark': {
        name: 'GitHub Dark (Default)',
        category: 'Dark',
        background: '#0d1117',
        foreground: '#c9d1d9',
        activityBar: '#0d1117',
        sideBar: '#010409',
        border: '#30363d',
        comment: '#8b949e',
        keyword: '#ff7b72',
        string: '#a5d6ff',
        number: '#79c0ff',
        function: '#d2a8ff',
        variable: '#ffa657',
        type: '#7ee787',
    },
    'ayu-dark': {
        name: 'Ayu Dark',
        category: 'Dark',
        background: '#0f1419',
        foreground: '#e6e1cf',
        activityBar: '#0b0e12',
        sideBar: '#0b0e12',
        border: '#253340',
        comment: '#5c6773',
        keyword: '#ff8f40',
        string: '#aad94c',
        number: '#d4bfff',
        function: '#ffb454',
        variable: '#e6e1cf',
        type: '#59c2ff',
    },
    'horizon': {
        name: 'Horizon',
        category: 'Dark',
        background: '#1c1e26',
        foreground: '#e3e6ee',
        activityBar: '#232530',
        sideBar: '#232530',
        border: '#16181d',
        comment: '#6c6f93',
        keyword: '#e95678',
        string: '#fab795',
        number: '#f09483',
        function: '#25b0bc',
        variable: '#b877db',
        type: '#21bfc2',
    },
    'solarized-light': {
        name: 'Solarized Light',
        category: 'Light',
        background: '#fdf6e3',
        foreground: '#657b83',
        activityBar: '#eee8d5',
        sideBar: '#eee8d5',
        border: '#e1dac6', // Subtle darker tone
        comment: '#93a1a1',
        keyword: '#859900',
        string: '#2aa198',
        number: '#d33682',
        function: '#b58900',
        variable: '#268bd2',
        type: '#cb4b16',
    },
    'github-light': {
        name: 'GitHub Light',
        category: 'Light',
        background: '#ffffff',
        foreground: '#24292f',
        activityBar: '#f6f8fa',
        sideBar: '#f6f8fa',
        border: '#d0d7de',
        comment: '#6e7781',
        keyword: '#cf222e',
        string: '#0a3069',
        number: '#0550ae',
        function: '#8250df',
        variable: '#953800',
        type: '#116329',
    },
    'ayu-light': {
        name: 'Ayu Light',
        category: 'Light',
        background: '#fafafa',
        foreground: '#5c6166',
        activityBar: '#f8f9fa',
        sideBar: '#f8f9fa',
        border: '#e6e6e6',
        comment: '#abb0b6',
        keyword: '#fa8d3e',
        string: '#86b300',
        number: '#a37acc',
        function: '#f2ae49',
        variable: '#5c6166',
        type: '#399ee6',
    },
    'gruvbox-light': {
        name: 'Gruvbox Light',
        category: 'Light',
        background: '#fbf1c7',
        foreground: '#3c3836',
        activityBar: '#ebdbb2',
        sideBar: '#ebdbb2',
        border: '#d5c4a1',
        comment: '#928374',
        keyword: '#9d0006',
        string: '#79740e',
        number: '#8f3f71',
        function: '#b57614',
        variable: '#076678',
        type: '#af3a03',
    },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('github-dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('portfolio-theme-v1') as Theme | null;
        if (stored && THEME_CONFIGS[stored]) {
            setThemeState(stored);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            const config = THEME_CONFIGS[theme];
            const root = document.documentElement;

            // Apply CSS variables
            root.style.setProperty('--theme-bg', config.background);
            root.style.setProperty('--theme-fg', config.foreground);
            root.style.setProperty('--theme-activity-bar', config.activityBar);
            root.style.setProperty('--theme-sidebar', config.sideBar);
            root.style.setProperty('--theme-border', config.border);

            root.style.setProperty('--theme-comment', config.comment);
            root.style.setProperty('--theme-keyword', config.keyword);
            root.style.setProperty('--theme-string', config.string);
            root.style.setProperty('--theme-number', config.number);
            root.style.setProperty('--theme-function', config.function);
            root.style.setProperty('--theme-variable', config.variable);
            root.style.setProperty('--theme-type', config.type);

            // Store preference
            localStorage.setItem('portfolio-theme-v1', theme);

            // Set data attribute for potential CSS selectors
            root.setAttribute('data-color-theme', theme);
        }
    }, [theme, mounted]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
