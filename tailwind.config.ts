import type { Config } from "tailwindcss"

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            "primary-black": "#1A232E",
            "secondary-white": "#c7c7c7",
         },
         transitionTimingFunction: {
            "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
         },
         screens: {
            xs: "375px",
         },
      },
   },
   plugins: [],
}
export default config
