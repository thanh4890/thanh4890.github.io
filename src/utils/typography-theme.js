// @flow
import type { OptionsType } from 'Types'
import gray from 'gray-percentage'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

const theme: OptionsType = {
  title: 'NDT-Blog',
  baseFontSize: '18px',
  baseLineHeight: 1.56,
  googleFonts: [
    {
      name: 'Roboto Condensed',
      styles: ['400'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
  scaleRatio: 2.5,
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerColor: '#383736',
  bodyColor: '#383736',
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '16px',
      baseLineHeight: '24.88px',
    })

    const styles = {
      'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
        fontWeight: options.headerWeight,
      },
      a: {
        fontWeight: 400,
        color: '#419eda',
        textDecoration: 'none',
      },
      'a:hover': {
        color: '#2a6496',
        textDecoration: 'underline',
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(40),
        paddingLeft: rhythm(3 / 4),
        marginLeft: 0,
        borderLeft: `${rhythm(1 / 4)} solid ${gray(87)}`,
      },
      // Mobile styles.
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(1 / 2),
        },
        table: {
          ...scale(-1 / 5),
        },
      },
    }

    return styles
  },
}

export default theme
