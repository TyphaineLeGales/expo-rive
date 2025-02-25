import Rive, {
    Fit,
    Layout,
    useRive,

  } from "@rive-app/react-canvas";
  import { forwardRef } from "react";
  
  
  function RiveComponent() {
    const { rive, RiveComponent } = useRive({
      src: require("../../rive/test.riv"),
      stateMachines: "state",
      layout: new Layout({
        fit: Fit.Cover,
      }),
      autoplay: true,
    });
  
    
  
    return (
      <RiveComponent
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  }
  
  export default forwardRef(RiveComponent);