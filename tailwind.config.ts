
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#066764',
          foreground: '#FFF5EB',
          light: '#0a8a86',
          dark: '#044442',
        },
        teal: {
          DEFAULT: '#066764',
          light: '#0a8a86',
          dark: '#044442',
        },
        navy: {
          DEFAULT: '#001A1A',
          light: '#002f2f',
          dark: '#001212',
        },
        urgency: {
          DEFAULT: 'rgb(210 95 64)',
          light: 'rgb(225 120 90)',
          dark: 'rgb(180 75 45)',
        },
        cream: {
          DEFAULT: '#FFF5EB',
          light: '#FFFAF5',
          dark: '#F5E5D7',
        },
        neutral: {
          DEFAULT: '#F8F9FA',
          50: '#FAFBFC',
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        secondary: {
          DEFAULT: 'rgb(210 95 64)',
          foreground: '#FFF5EB',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'expand': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'expand': 'expand 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      fontFamily: {
        'sans': ['"Inclusive Sans"', 'system-ui', 'sans-serif'],
        'inclusive': ['"Inclusive Sans"', 'system-ui', 'sans-serif'],
        'heading': ['"Inclusive Sans"', 'sans-serif'],
        'body': ['"Inclusive Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'organic-pattern': "url('/lovable-uploads/4b10173c-2952-43ac-8933-1d39bb8de7e6.png')",
        'wave-pattern': "url('/lovable-uploads/wave-bg.svg')",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
