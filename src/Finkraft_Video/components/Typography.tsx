import React from 'react';
import { COLORS, fontFamily } from '../utils/constants';

// Standard "Hero" Title
export const Title: React.FC<{ 
    children: React.ReactNode; 
    style?: React.CSSProperties; 
    color?: string;
}> = ({ children, style, color = COLORS.TextPrimary }) => (
    <h1 style={{
        fontFamily,
        fontSize: 80,
        fontWeight: 900,
        color: color,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        margin: 0,
        textAlign: 'center',
        ...style
    }}>
        {children}
    </h1>
);

// Standard Subtitle
export const Subtitle: React.FC<{ 
    children: React.ReactNode; 
    style?: React.CSSProperties; 
    color?: string;
}> = ({ children, style, color = COLORS.TextSecondary }) => (
    <h2 style={{
        fontFamily,
        fontSize: 40,
        fontWeight: 500,
        color: color,
        letterSpacing: '-0.01em',
        margin: 0,
        marginTop: 16,
        textAlign: 'center',
        opacity: 0.9,
        ...style
    }}>
        {children}
    </h2>
);

// Gradient Highlight Text
export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span style={{
        background: `linear-gradient(135deg, ${COLORS.Primary}, ${COLORS.Secondary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }}>
        {children}
    </span>
);
