/// <reference types="vite/client" />

declare module 'tailwind-merge' {
  export function twMerge(...classLists: Array<string | undefined | null | false | 0 | Record<string, boolean>>): string;
  export function extendTailwindMerge(...args: any[]): any;
  export type ClassNameValue = any;
}
