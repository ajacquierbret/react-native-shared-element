import iconFont from "react-native-vector-icons/Fonts/Entypo.ttf";
import Icon from "react-native-vector-icons/dist/Entypo";

// Generate required css
export { Icon };
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Entypo;
}`;

// Create stylesheet
const style: any = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
