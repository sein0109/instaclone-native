import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Platform } from "react-native-web";

export default function DismissKeyboard({children}){
     const dismissKeyboard = () => {
          KeyboardEvent.dismiss();
     };
  return ( 
    <TouchableWithoutFeedback
       style={{ flex: 1}}
       onPress={dismissKeyboard}
       disabled={Platform.Os ==="web"}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}