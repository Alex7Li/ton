import { StyleSheet} from 'react-native';

export const style = StyleSheet.create({
     container:{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         padding: 30,
     },
     rowItem:{
        flex: 1,
        flexDirection: "row",
                 justifyContent: "center",
                 alignItems: "center",
     },
     picker:{
        height: 0, width: 100, top: -107,
     },
       backgroundImage: {
         width: '100%',
         height: '100%'
       },
       leaf: {
         width: 25,
         height: 25,
         marginLeft: "auto",
         marginRight: "auto",
         marginBottom: 30,
         marginTop: 30,
       },
       buttonStyle: {
         width: 200,
         height: 40,
         bottom: 40,
         marginLeft: "auto",
         marginRight: "auto",
       },
       textNormal:{
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Cochin"
       },
              textBigger:{
               textAlign: "center",
               fontSize: 30,
               fontFamily: "Cochin"
              },
      smallTextGreen:{
            color: "green",
            fontSize: 20,
            fontFamily: "Cochin-Bold",
       },
       textGreen:{
             color: "green",
             fontSize: 30,
             fontFamily: "Cochin-Bold",
        },
        textBold:{
             textAlign: "center",
             justifyContent: "center",
             fontSize: 25,
             fontFamily: "Avenir-Black"
        },
        textBig:{
           fontSize: 50,
                       fontFamily: "Avenir-Black"

        },
 })