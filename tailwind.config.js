/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Define custom transition durations
      transitionDuration: {
        1000: '1000ms' // 1 second
      },
      // Define custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      // Apply custom keyframes to animation
      animation: {
        'fade-in': 'fadeIn 1000ms ease-in-out forwards' // 1 second
      },
      fontFamily: {
        poppins: ['Poppins', 'Raleway', 'sans-serif']
      },
      blur: {
        xs: '2px'
      },
      colors: {
        // Primary Colors
        'primary-1': '#FC728B',
        'primary-2': '#F4C395',
        'primary-3': '#A296BD',
        
        // Neutral Colors
        'neutral-1': '#FFFFFF',
        'neutral-2': '#8D8080',
        'neutral-3': '#999999',
        
        // Light Colors
        'light-1': '#D1CAFF',
        'light-2': '#FFCACA',
        'light-3': '#CAECFF',
        
        // Custom Colors
        'custom-1': '#202433',
        'custom-2': '#252D3A',
        'custom-3': '#272D43',
        'custom-4': '#33394F'
      }
    }
  },
  plugins: [require("daisyui")],
}
