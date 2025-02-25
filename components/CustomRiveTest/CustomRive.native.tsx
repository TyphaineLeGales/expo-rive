import { forwardRef,useRef } from "react";
import Rive, { Fit, RiveRef } from "rive-react-native";

function CustomRiveTest() {
  const riveComponentRef = useRef<RiveRef>(null);


  return (
    <Rive
      ref={riveComponentRef}
      resourceName="screw"
      fit={Fit.Cover}
      style={{
        width: "100%",
        height: "100%",
      }}

    />
  );
}

export default forwardRef(CustomRiveTest);