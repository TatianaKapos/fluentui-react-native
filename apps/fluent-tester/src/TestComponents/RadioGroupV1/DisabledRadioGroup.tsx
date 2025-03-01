import * as React from 'react';
import { View } from 'react-native';

import { Separator } from '@fluentui/react-native';
import { RadioGroup, Radio } from '@fluentui-react-native/experimental-radio-group';

export const DisabledRadioGroup: React.FunctionComponent = () => {
  // Client's example onChange function
  const onChange = React.useCallback((key: string) => {
    console.log(key);
  }, []);

  return (
    <View>
      <RadioGroup disabled label="Disabled RadioGroup" defaultValue="X" onChange={onChange}>
        <Radio label="Option W" value="W" accessibilityLabel="Test Accessibility Label" />
        <Radio label="Option X" value="X" />
        <Radio label="Option Y" value="C" />
        <Radio label="Option Z" value="Z" />
      </RadioGroup>
      <Separator />
      <RadioGroup label="Disabled Item" defaultValue="X" onChange={onChange}>
        <Radio label="Option W" value="W" accessibilityLabel="Test Accessibility Label" />
        <Radio label="Option X" value="X" />
        <Radio label="Option Y (disabled)" value="C" disabled={true} />
        <Radio label="Option Z" value="Z" />
      </RadioGroup>
    </View>
  );
};
