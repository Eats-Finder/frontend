import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const pxToRem = (px: number) => `${px / 16}rem`

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // src를 이용할 경우에는 아래 경로 이용
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        25: "#FFF8F5 !important",
        50: "#FEE0D2 !important",
        100: "#FDBEA0 !important",
        200: "#FD9C6D !important",
        300: "#FC7A3B !important",
        400: "#FB5607 !important",
        500: "#CE4503 !important",
        600: "#9C3403 !important",
        700: "#692302 !important",
        800: "#371201 !important",
        900: "#050200 !important",
      },
      gray: {
        50: "#F2F2F2 !important",
        100: "#D9D9D9 !important",
        200: "#BFBFBF !important",
        300: "#A6A6A6 !important",
        400: "#8C8C8C !important",
        500: "#737373 !important",
        600: "#595959 !important",
        700: "#404040 !important",
        800: "#262626 !important",
        900: "#0D0D0D !important",
      },
      error: "#E62900 !important",
      white: "#FFFFFF !important",
      green: "#03C75A !important",
    },
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "typo-body": (value) => ({
            fontSize: value,
            lineHeight: "150%",
            fontWeight: theme("fontWeight.normal"),
          }),
          "typo-subTitle": (value) => ({
            fontSize: value,
            lineHeight: "135%",
            fontWeight: theme("fontWeight.semibold"),
          }),
          "typo-title": (value) => ({
            fontSize: value,
            lineHeight: "135%",
            fontWeight: theme("fontWeight.extrabold"),
          }),
        },
        {
          values: {
            12: pxToRem(12),
            14: pxToRem(14),
            16: pxToRem(16),
            18: pxToRem(18),
            20: pxToRem(20),
            22: pxToRem(22),
            24: pxToRem(24),
            26: pxToRem(26),
            28: pxToRem(28),
            30: pxToRem(30),
            32: pxToRem(32),
            34: pxToRem(34),
            36: pxToRem(36),
            38: pxToRem(38),
            40: pxToRem(40),
          },
        },
      )
    }),
  ],
}
export default config
