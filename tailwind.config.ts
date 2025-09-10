/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Russo One"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Existing brand colors
        brand: {
          50: '#f2fbff',
          100: '#dff4ff',
          200: '#bfe9ff',
          300: '#91daff',
          400: '#57c4ff',
          500: '#1ea7ff',
          600: '#0a86d6',
          700: '#086ba8',
          800: '#0a557f',
          900: '#0a4768',
        },
        spark: {
          400: '#ffd54d',
          500: '#ffbf00',
          600: '#e6a700',
        },
        // Pokemon-Tech color system
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card-bg))',
          foreground: 'hsl(var(--card-foreground))',
          border: 'hsl(var(--card-border))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'grey-electric': {
          DEFAULT: 'hsl(var(--grey-electric))',
          foreground: 'hsl(var(--grey-electric-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'soft-neon': '0 0 32px rgba(30,167,255,.35)',
        'electric-glow': 'var(--glow-electric)',
        'cyber-glow': 'var(--glow-cyber)',
        'psychic-glow': 'var(--glow-psychic)',
        'card-shadow': 'var(--shadow-card)',
      },
      backgroundImage: {
        'code-grid':
          'radial-gradient(rgba(30,167,255,.12) 1px, transparent 1px), radial-gradient(rgba(255,191,0,.10) 1px, transparent 1px)',
        'gradient-electric': 'var(--gradient-electric)',
        'gradient-cyber': 'var(--gradient-cyber)',
        'gradient-psychic': 'var(--gradient-psychic)',
        'gradient-holographic': 'var(--gradient-holographic)',
      },
      backgroundSize: {
        'grid-16': '16px 16px, 32px 32px',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
