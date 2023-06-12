import * as React from "react";
import Odometer from "react-odometerjs";
import 'odometer/themes/odometer-theme-car.css';


type Props = {
  fieldValue: number;
};

const OdometerUI = (props: Props) => {
    const [fieldNumber, setFieldNumber] = React.useState(0);
    React.useEffect(() => {
        setFieldNumber(props.fieldValue)
      }, [props.fieldValue]);
  return (
    <div>
      <Odometer format="d" duration={500} value={fieldNumber} />
    </div>
  );
};

export default OdometerUI;
