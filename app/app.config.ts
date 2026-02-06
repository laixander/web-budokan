export default defineAppConfig({
    ui: {
        colors: {
            primary: 'red',
            neutral: 'neutral'
        },

        button: {
            slots: {
                base: 'font-bold uppercase tracking-widest'
            },
            variants: {
                size: {
                    md: {
                        base: 'px-4 py-2.5 text-sm gap-1.5',
                        leadingIcon: 'size-5',
                        leadingAvatarSize: '2xs',
                        trailingIcon: 'size-5'
                    },
                }
            },
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'text-white bg-red-700 hover:bg-red-700/75 active:bg-red-700/75 disabled:bg-red-700 aria-disabled:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700'
                },
            ]
        },

        input: {
            variants: {
                size: {
                    md: {
                        base: 'px-4 py-2 text-base gap-2'
                    }
                }
            }
        }
    }
})
