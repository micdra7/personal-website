export const getClassNameIfActive = (className: string, isActive: boolean): string => (
    isActive ? `${className} active` : className
);
