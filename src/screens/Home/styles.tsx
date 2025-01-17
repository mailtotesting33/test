import { StyleSheet } from "react-native";
import { RF } from "../../shared/theme/responsive";
import { COLORS } from "../../shared/theme/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    img:{
      width: RF(70),
      height: RF(70),
      backgroundColor: COLORS.ACTIVE_TAB,
      alignSelf: 'center',
      borderRadius: RF(18),
      position:'relative',
      top:-20
    }
  });