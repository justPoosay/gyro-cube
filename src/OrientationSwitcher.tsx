import React, { useState } from 'react';

import { useDeviceOrientation } from './useDeviceOrientation';
import Toggle from './Toggle';

type OrientationSwitcherProps = {
  onToggle: (toggleState: boolean) => void,
  labelOn?: string,
  labelOff?: string,
};

const OrientationSwitcher = (props: OrientationSwitcherProps): React.ReactElement => {
  const { onToggle: onSwitchToggle, labelOn = 'Using orientation', labelOff = 'Use orientation' } = props;

  const {
    requestAccess,
    revokeAccess,
  } = useDeviceOrientation();

  const [orientationAvailable, setOrientationAvailable] = useState(false);

  const onToggle = (toggleState: boolean): void => {
    if (toggleState) {
      requestAccess().then((granted: boolean) => {
        if (granted) {
          setOrientationAvailable(true);
        } else {
          setOrientationAvailable(false);
        }
      });
    } else {
      revokeAccess().then(() => {
        setOrientationAvailable(false);
      });
    }
    onSwitchToggle(toggleState);
  };

  return (
    <div>
      <Toggle
        onChange={onToggle}
        isOn={orientationAvailable}
        labelOff={labelOff}
        labelOn={labelOn}
      />
    </div>
  );
};

export default OrientationSwitcher;
