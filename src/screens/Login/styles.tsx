import { StyleSheet } from "react-native";
import { RF } from "../../shared/theme/responsive";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#2c3e50',
    },
    btn:{
         top:RF(40)
    },
    head:{paddingTop: RF(45), paddingBottom: RF(15)}
});
