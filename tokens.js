const choices = {
  colors: {
    brand: {
      slateBlue: '#7559d1',
      mediumPurple: '#9879e9',
      blueMoon: '#eff1fd',
      amaranth: '#eb2d52',
      mandy: '#eb4e58',
      eastBay: '#455970',
      regentGray: '#7e858c',
      loblolly: '#b7b7b7',
      whiteLilac: '#e8e8e8',
      hintOfRed: '#f9f9f9',
      romance: '#fcfdfd',
      mediumSpringGreen: '#00e5a8',
    },
    base: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },

    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },

    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },

    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },

    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },

    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },

    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },

    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },

    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    lime: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
    },

    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },

    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },

    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    warmGray: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },

    trueGray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },

    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },

    coolGray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },

    blueGray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  spacing: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem'
  },
  screens: {
    xs: '420px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    max: {
      xs: '419px',
      sm: '639px',
      md: '767px',
      lg: '1023px',
      xl: '1279px'
    }
  },
  fontFamily: {
    serif: ['Roboto Slab', '"Times New Roman"', 'serif'],
    sans: ['Apercu', 'Arial', 'sans-serif'],
    mono: ['"Roboto Mono"', 'Consolas', 'monospace']
  },
  fontSize: {
    base: '10px',
    xs: '.75rem',
    sm: '.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em'
  },
  // prettier-ignore
  shadows: {
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: 'none',
    down: {
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
    },
    up: {
      sm: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
    }
  },
  minHeight: {
    '0': '0',
    full: '100%',
    screen: '100vh'
  },
  minWidth: {
    '0': '0',
    full: '100%'
  },
  opacity: {
    '0': '0',
    '25': '0.25',
    '50': '0.5',
    '75': '0.75',
    '100': '1'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px'
  },
  zIndex: {
    auto: 'auto',
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50'
  }
}

const decisions = {
  color: {
    primary: choices.colors.brand.mediumPurple,
    primaryMuted: choices.colors.brand.slateBlue,
    primaryHighlight: choices.colors.brand.blueMoon,
    primaryInverted: choices.colors.brand.romance,
    fontBase: choices.colors.brand.eastBay,
    fontMuted: choices.colors.brand.regentGray,
    fontHighlight: choices.colors.brand.loblolly,
    fontInverted: choices.colors.base.white,
    secondary: choices.colors.brand.amaranth,
    secondaryMuted: choices.colors.brand.mandy,
    secondaryHighlight: choices.colors.rose[200],
    secondaryInverted: choices.colors.base.white,
    tertiary: choices.colors.brand.mediumSpringGreen,
    tertiaryMuted: choices.colors.emerald[400],
    tertiaryHighlight: choices.colors.emerald[200],
    tertiaryInverted: choices.colors.base.white,
  }
}

module.exports = { choices, decisions }

// export const choices = {
//   colors: {
//     brand: {
//       koromiko: '#fcb64d',
//       chiffon: '#fefcb9',
//       beige: '#fefce7',
//       cinnabar: '#f04c39',
//       mandyspink: '#febb9f',
//       dawnpink: '#fcdcd9',
//       bayofmany: '#204282',
//       poloblue: '#8ea4ce',
//       mystic: '#eceff4',
//       tuna: '#494949',
//       orange: '#fc9e12'
//     },

//     transparent: 'transparent',

//     black: '#000',
//     white: '#fff',

//     gray: {
//       100: '#f7fafc',
//       200: '#edf2f7',
//       300: '#e2e8f0',
//       400: '#cbd5e0',
//       500: '#a0aec0',
//       600: '#718096',
//       700: '#4a5568',
//       800: '#2d3748',
//       900: '#1a202c'
//     },
//     red: {
//       100: '#fff5f5',
//       200: '#fed7d7',
//       300: '#feb2b2',
//       400: '#fc8181',
//       500: '#f56565',
//       600: '#e53e3e',
//       700: '#c53030',
//       800: '#9b2c2c',
//       900: '#742a2a'
//     },
//     orange: {
//       100: '#fffaf0',
//       200: '#feebc8',
//       300: '#fbd38d',
//       400: '#f6ad55',
//       500: '#ed8936',
//       600: '#dd6b20',
//       700: '#c05621',
//       800: '#9c4221',
//       900: '#7b341e'
//     },
//     yellow: {
//       100: '#fffff0',
//       200: '#fefcbf',
//       300: '#faf089',
//       400: '#f6e05e',
//       500: '#ecc94b',
//       600: '#d69e2e',
//       700: '#b7791f',
//       800: '#975a16',
//       900: '#744210'
//     },
//     green: {
//       100: '#f0fff4',
//       200: '#c6f6d5',
//       300: '#9ae6b4',
//       400: '#68d391',
//       500: '#48bb78',
//       600: '#38a169',
//       700: '#2f855a',
//       800: '#276749',
//       900: '#22543d'
//     },
//     teal: {
//       100: '#e6fffa',
//       200: '#b2f5ea',
//       300: '#81e6d9',
//       400: '#4fd1c5',
//       500: '#38b2ac',
//       600: '#319795',
//       700: '#2c7a7b',
//       800: '#285e61',
//       900: '#234e52'
//     },
//     blue: {
//       100: '#ebf8ff',
//       200: '#bee3f8',
//       300: '#90cdf4',
//       400: '#63b3ed',
//       500: '#4299e1',
//       600: '#3182ce',
//       700: '#2b6cb0',
//       800: '#2c5282',
//       900: '#2a4365'
//     },
//     indigo: {
//       100: '#ebf4ff',
//       200: '#c3dafe',
//       300: '#a3bffa',
//       400: '#7f9cf5',
//       500: '#667eea',
//       600: '#5a67d8',
//       700: '#4c51bf',
//       800: '#434190',
//       900: '#3c366b'
//     },
//     purple: {
//       100: '#faf5ff',
//       200: '#e9d8fd',
//       300: '#d6bcfa',
//       400: '#b794f4',
//       500: '#9f7aea',
//       600: '#805ad5',
//       700: '#6b46c1',
//       800: '#553c9a',
//       900: '#44337a'
//     },
//     pink: {
//       100: '#fff5f7',
//       200: '#fed7e2',
//       300: '#fbb6ce',
//       400: '#f687b3',
//       500: '#ed64a6',
//       600: '#d53f8c',
//       700: '#b83280',
//       800: '#97266d',
//       900: '#702459'
//     }
//   },
//   spacing: {
//     px: '1px',
//     '0': '0',
//     '1': '0.25rem',
//     '2': '0.5rem',
//     '3': '0.75rem',
//     '4': '1rem',
//     '5': '1.25rem',
//     '6': '1.5rem',
//     '8': '2rem',
//     '10': '2.5rem',
//     '12': '3rem',
//     '16': '4rem',
//     '20': '5rem',
//     '24': '6rem',
//     '32': '8rem',
//     '40': '10rem',
//     '48': '12rem',
//     '56': '14rem',
//     '64': '16rem'
//   },
//   screens: {
//     xs: '420px',
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//     max: {
//       xs: '419px',
//       sm: '639px',
//       md: '767px',
//       lg: '1023px',
//       xl: '1279px'
//     }
//   },
//   fontFamily: {
//     serif: ['Roboto Slab', '"Times New Roman"', 'serif'],
//     sans: ['Apercu', 'Arial', 'sans-serif'],
//     mono: ['"Roboto Mono"', 'Consolas', 'monospace']
//   },
//   fontSize: {
//     base: {
//       mobile: '16px',
//       desktop: '18px'
//     },
//     xs: '.75rem',
//     sm: '.875rem',
//     md: '1rem',
//     lg: '1.125rem',
//     xl: '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '4rem'
//   },
//   fontWeight: {
//     hairline: 100,
//     thin: 200,
//     light: 300,
//     normal: 400,
//     medium: 500,
//     semibold: 600,
//     bold: 700,
//     extrabold: 800,
//     black: 900
//   },
//   lineHeight: {
//     none: 1,
//     tight: 1.25,
//     snug: 1.375,
//     normal: 1.5,
//     relaxed: 1.625,
//     loose: 2
//   },
//   letterSpacing: {
//     tighter: '-.05em',
//     tight: '-.025em',
//     normal: '0',
//     wide: '.025em',
//     wider: '.05em',
//     widest: '.1em'
//   },
//   // prettier-ignore
//   shadows: {
//     outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
//     none: 'none',
//     down: {
//       sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
//       md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//       lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//       xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
//     },
//     up: {
//       sm: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)",
//       md: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
//       lg: "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
//       xl: "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
//       "2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
//       inner: "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
//     }
//   },
//   minHeight: {
//     '0': '0',
//     full: '100%',
//     screen: '100vh'
//   },
//   minWidth: {
//     '0': '0',
//     full: '100%'
//   },
//   opacity: {
//     '0': '0',
//     '25': '0.25',
//     '50': '0.5',
//     '75': '0.75',
//     '100': '1'
//   },
//   borderRadius: {
//     none: '0',
//     sm: '0.125rem',
//     md: '0.25rem',
//     lg: '0.5rem',
//     full: '9999px'
//   },
//   zIndex: {
//     auto: 'auto',
//     '0': '0',
//     '10': '10',
//     '20': '20',
//     '30': '30',
//     '40': '40',
//     '50': '50'
//   }
// }

// export const decisions = {
//   // fonts
//   title: {
//     fontFamily: choices.fontFamily.sans,
//     fontWeight: choices.fontWeight.bold,
//     textTransform: 'uppercase',
//     fontSize: {
//       '4': choices.fontSize.md,
//       '3': choices.fontSize.lg,
//       '2': choices.fontSize['3xl'],
//       '1': choices.fontSize['4xl'],
//       '0': choices.fontSize['5xl']
//     },
//     color: {
//       default: choices.colors.brand.tuna,
//       alt: {
//         blue: choices.colors.brand.bayofmany,
//         red: choices.colors.brand.cinnabar,
//         yellow: choices.colors.brand.chiffon,
//         orange: choices.colors.brand.orange,
//         gray: choices.colors.gray[800]
//       }
//     }
//   },
//   subtitle: {
//     fontFamily: choices.fontFamily.serif,
//     fontWeight: choices.fontWeight.normal,
//     textTransform: 'uppercase',
//     fontSize: {
//       '2': choices.fontSize.lg,
//       '1': choices.fontSize['2xl']
//     },
//     color: {
//       default: choices.colors.brand.tuna,
//       alt: {
//         blue: choices.colors.brand.bayofmany,
//         red: choices.colors.brand.cinnabar,
//         yellow: choices.colors.brand.koromiko,
//         gray: choices.colors.gray[800]
//       }
//     }
//   },
//   label: {
//     fontFamily: choices.fontFamily.sans,
//     fontWeight: choices.fontWeight.bold,
//     fontSize: choices.fontSize.xs,
//     color: choices.colors.gray[900]
//   },
//   eyebrow: {
//     fontFamily: choices.fontFamily.sans,
//     fontWeight: choices.fontWeight.bold,
//     fontSize: {
//       '2': choices.fontSize.xs,
//       '1': choices.fontSize.lg
//     },
//     color: choices.colors.brand.tuna
//   },
//   paragraph: {
//     fontFamily: choices.fontFamily.sans,
//     fontWeight: {
//       normal: choices.fontWeight.normal,
//       bold: choices.fontWeight.bold
//     },
//     fontSize: {
//       sm: choices.fontSize.lg,
//       md: choices.fontSize.xl
//     },
//     color: {
//       default: choices.colors.brand.tuna,
//       alt: {
//         blue: choices.colors.brand.bayofmany,
//         red: choices.colors.brand.cinnabar,
//         yellow: choices.colors.brand.chiffon,
//         gray: choices.colors.gray[800]
//       }
//     }
//   },
//   icon: {
//     color: {
//       gray: choices.colors.gray[900]
//     },
//     fontSize: {
//       sm: choices.fontSize.sm,
//       md: choices.fontSize.md,
//       lg: choices.fontSize.xl
//     }
//   },
//   // layout
//   container: {
//     maxWidth: { large: choices.screens.xl, small: choices.screens.md },
//     padding: choices.spacing[6]
//   },
//   // utils
//   queries: {
//     screens: {
//       xsmall: `max-width: ${choices.screens.max.xs}`,
//       small: `max-width: ${choices.screens.max.sm}`,
//       mobile: `max-width: ${choices.screens.max.lg}`,
//       desktop: `min-width: ${choices.screens.lg}`
//     }
//   }
// }