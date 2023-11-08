import { Text as PlainText } from 'react-native';
import React from 'react';

type TextProps = PlainText['props'];

export default function Text({ ...props }: TextProps) {
  const { style } = props;

  return <PlainText style={[{ color: 'white' }, style]} {...props} />;
}
