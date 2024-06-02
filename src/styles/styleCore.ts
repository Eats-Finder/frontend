const Scolors = {
  text: {
    primary: {
      25: "text-primary-25",
      50: "text-primary-50",
      100: "text-primary-100",
      200: "text-primary-200",
      300: "text-primary-300",
      400: "text-primary-400",
      500: "text-primary-500",
      600: "text-primary-600",
      700: "text-primary-700",
      800: "text-primary-800",
      900: "text-primary-900",
    },
    gray: {
      50: "text-gray-50",
      100: "text-gray-100",
      200: "text-gray-200",
      300: "text-gray-300",
      400: "text-gray-400",
      500: "text-gray-500",
      600: "text-gray-600",
      700: "text-gray-700",
      800: "text-gray-800",
      900: "text-gray-900",
    },
    error: "text-error",
    white: "text-white",
    green: "text-green",
  },
  bg: {
    primary: {
      25: "bg-primary-25",
      50: "bg-primary-50",
      100: "bg-primary-100",
      200: "bg-primary-200",
      300: "bg-primary-300",
      400: "bg-primary-400",
      500: "bg-primary-500",
      600: "bg-primary-600",
      700: "bg-primary-700",
      800: "bg-primary-800",
      900: "bg-primary-900",
    },
    gray: {
      50: "bg-gray-50",
      100: "bg-gray-100",
      200: "bg-gray-200",
      300: "bg-gray-300",
      400: "bg-gray-400",
      500: "bg-gray-500",
      600: "bg-gray-600",
      700: "bg-gray-700",
      800: "bg-gray-800",
      900: "bg-gray-900",
    },
    error: "bg-error",
    white: "bg-white",
    green: "bg-green",
  },
} as const

const SfontSize = {
  12: "typo-body-12",
  14: "typo-body-14",
  16: "typo-body-16",
  18: "typo-body-18",
  20: "typo-body-20",
  22: "typo-body-22",
  24: "typo-body-24",
  26: "typo-body-26",
  28: "typo-body-28",
  30: "typo-body-30",
  32: "typo-body-32",
  34: "typo-body-34",
  36: "typo-body-36",
  38: "typo-body-38",
  40: "typo-body-40",
} as const

const SbuttonSize = {
  s: "w-[160px] h-[60px]",
  m: "w-[280px] h-[60px]",
  l: "w-[400px] h-[60px]",
} as const

const Scenter = "flex items-center justify-center"

const Stransition =
  "transition duration-200 ease-[cubic-bezier(.61,.14,.34,1.01)]"

export { Scolors, SfontSize, Scenter, SbuttonSize, Stransition }
