import React from 'react';
import { COLORS, fontFamily } from '../utils/constants';

interface InvoiceCardProps {
  id: string;
  amount: string;
  date: string;
  status?: 'pending' | 'verified' | 'error';
  style?: React.CSSProperties;
  glass?: boolean;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({ id, amount, date, status = 'pending', style, glass = false }) => {
  const isError = status === 'error';
  const isVerified = status === 'verified';
  
  const borderColor = isError ? COLORS.ErrorRed : isVerified ? COLORS.SuccessGreen : 'rgba(30, 64, 175, 0.1)';
  const bg = glass ? 'rgba(255, 255, 255, 0.9)' : COLORS.Background;
  
  return (
    <div
      style={{
        width: 300,
        height: 180, // Landscape card for better data fit
        backgroundColor: bg,
        borderRadius: 12,
        boxShadow: glass ? '0 8px 32px rgba(31, 38, 135, 0.15)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        position: 'relative',
        border: `1px solid ${borderColor}`,
        fontFamily,
        backdropFilter: glass ? 'blur(8px)' : 'none',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Status Bar Indicator */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: isError ? COLORS.ErrorRed : isVerified ? COLORS.SuccessGreen : COLORS.Primary
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 25, marginTop: 5 }}>
        <div>
            <div style={{ fontSize: 12, color: COLORS.TextSecondary, fontWeight: 500, letterSpacing: '0.02em' }}>INVOICE</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.TextPrimary }}>#{id}</div>
        </div>
        <div style={{ 
            padding: '4px 8px', 
            borderRadius: 4, 
            backgroundColor: isVerified ? 'rgba(16, 185, 129, 0.1)' : isError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(243, 244, 246, 1)',
            color: isVerified ? COLORS.SuccessGreen : isError ? COLORS.ErrorRed : COLORS.TextSecondary,
            fontSize: 10,
            fontWeight: 700,
            textTransform: 'uppercase'
        }}>
            {status}
        </div>
      </div>

      {/* Main Amount */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.TextPrimary, letterSpacing: '-0.02em' }}>
            {amount}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F3F4F6', paddingTop: 12 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#E5E7EB' }} />
            <div style={{ fontSize: 11, color: COLORS.TextSecondary, fontWeight: 500 }}>Acme Corp</div>
        </div>
        <div style={{ fontSize: 11, color: COLORS.TextSecondary }}>{date}</div>
      </div>
    </div>
  );
};
