import Typography from "typography";
import moraga from "typography-theme-moraga";

// https://github.com/KyleAMathews/typography.js#customizing-themes
moraga.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    color: '#24292e'
  }
})

const typography = new Typography(moraga);

module.exports = typography;
