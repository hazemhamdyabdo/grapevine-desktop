export const theme = {
  ui: {
    icons: {
      chevronDown: 'line-md:chevron-down'
    },
    colors: {
      primary: 'primary',
      neutral: 'neutral',
      skeleton: 'skeleton',
      red: 'red',
      error: 'red',
      shark: 'shark',
      placeholder: 'placeholder',
      disabled: 'disabled',
      yellow: 'yellow',
      white: 'white'
    },
    container: {
      base: 'max-w-(--ui-container) mx-0 px-4 sm:px-6 lg:px-8 pt-4 '
    },
    input: {
      slots: {
        base: ' rounded-[calc(var(--ui-radius)*4)] h-[56px] p-8 w-[387px] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 border-0 outline-none ring-0'
      },
      variant: {
        outline:
          'text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)',
        soft: 'text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50',
        subtle: 'text-(--ui-text-highlighted) bg-(--ui-bg-elevated)',
        ghost:
          'text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent',
        none: 'text-(--ui-text-highlighted) bg-transparent'
      }
    },
    pinInput: {
      slots: {
        root: 'relative inline-flex items-center justify-between ',
        base: 'rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) w-[56px] text-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75'
      },
      variant: {
        outline:
          'text-(--ui-text-highlighted) bg-red-500 ring ring-inset ring-(--ui-border-accented)',
        soft: 'text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50',
        subtle:
          'text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)',
        ghost:
          'text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent',
        none: 'text-(--ui-text-highlighted) bg-transparent'
      },
      variants: {
        size: {
          xs: {
            base: 'size-6 text-xs'
          },
          sm: {
            base: 'size-7 text-xs'
          },
          md: {
            base: 'size-8 text-sm'
          },
          lg: {
            base: 'size-9 text-sm'
          },
          xl: {
            base: 'size-10 text-base'
          },
          xxl: {
            base: 'size-12 text-lg'
          }
        }
      }
    },
    formField: {
      slots: {
        label: 'text-neutral-900 font-medium text-sm'
      }
    },
    button: {
      slots: {
        base: 'font-bold h-12 rounded-2xl flex justify-center cursor-pointer'
      }
    },
    card: {
      slots: {
        root: 'rounded-[calc(var(--ui-radius)*2)]',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-(--ui-bg-inverted) text-(--ui-bg)'
          },
          outline: {
            root: 'bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)'
          },
          soft: {
            root: 'bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)'
          },
          subtle: {
            root: 'bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)'
          },
          ghost: {
            root: 'bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    },
    select: {
      slots: {
        base: 'w-full rounded-[calc(var(--ui-radius)*4)] h-[56px] bg-transparent p-8  border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75'
      },
      variant: {
        outline:
          'text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)',
        soft: 'text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50',
        subtle:
          'text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)',
        ghost:
          'text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent',
        none: 'text-(--ui-text-highlighted) bg-transparent'
      }
    },
    avatar: {
      slots: {
        root: 'inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full align-middle bg-(--ui-bg-elevated)',
        image: 'h-full w-full rounded-[inherit] object-cover',
        fallback: 'font-medium leading-none text-(--ui-text-muted) truncate',
        icon: 'text-(--ui-text-muted) shrink-0'
      },
      variants: {
        size: {
          '3xs': {
            root: 'size-4 text-[8px]'
          },
          '2xs': {
            root: 'size-5 text-[10px]'
          },
          xs: {
            root: 'size-6 text-xs'
          },
          sm: {
            root: 'size-7 text-sm'
          },
          md: {
            root: 'size-8 text-base'
          },
          lg: {
            root: 'size-9 text-lg'
          },
          xl: {
            root: 'size-10 text-xl'
          },
          '2xl': {
            root: 'size-11 text-[22px]'
          },
          '3xl': {
            root: 'size-12 text-2xl'
          },
          '4xl': {
            root: 'size-13 text-3xl'
          },
          '5xl': {
            root: 'size-14 text-4xl'
          },
          '6xl': {
            root: 'size-15 text-5xl'
          },
          '7xl': {
            root: 'size-16 text-6xl'
          },
          '8xl': {
            root: 'size-17 text-7xl'
          },
          '9xl': {
            root: 'size-18 text-8xl'
          }
        }
      }
    },
    switch: {
      variants: {
        size: {
          xs: {
            base: 'w-7',
            container: 'h-4',
            thumb:
              'size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3',
            wrapper: 'text-xs'
          },
          sm: {
            base: 'w-8',
            container: 'h-4',
            thumb:
              'size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5',
            wrapper: 'text-xs'
          },
          md: {
            base: 'w-9',
            container: 'h-5',
            thumb:
              'size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4',
            wrapper: 'text-sm'
          },
          lg: {
            base: 'w-10',
            container: 'h-5',
            thumb:
              'size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5',
            wrapper: 'text-sm'
          },
          xl: {
            base: 'w-11',
            container: 'h-6',
            thumb:
              'size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5',
            wrapper: 'text-base'
          },
          '2xl': {
            base: 'w-12',
            container: 'h-6',
            thumb:
              'size-5.5 data-[state=checked]:translate-x-5.5 data-[state=checked]:rtl:-translate-x-5.5',
            wrapper: 'text-base'
          },
          '3xl': {
            base: 'w-13',
            container: 'h-7',
            thumb:
              'size-6 data-[state=checked]:translate-x-6 data-[state=checked]:rtl:-translate-x-6',
            wrapper: 'text-lg'
          },
          '4xl': {
            base: 'w-14',
            container: 'h-7'
          }
        }
      }
    },
    toast: {
      slots: {
        root: 'bg-primary-500 text-white',
        icon: 'text-white',
        title: 'text-white'
      }
    }
  }
}
