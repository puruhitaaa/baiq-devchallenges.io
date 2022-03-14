import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Devchallenges/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ColorDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorDefault.args = {
  color: 'default',
  label: 'Button',
};

export const ColorPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorPrimary.args = {
  color: 'primary',
  label: 'Button',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  color: 'secondary',
  label: 'Button',
};

export const ColorDanger = Template.bind({});
ColorDanger.args = {
  color: 'danger',
  label: 'Button',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size: 'lg',
  color: 'primary',
  label: 'Button',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  size: 'md',
  color: 'primary',
  label: 'Button',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: 'sm',
  color: 'primary',
  label: 'Button',
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  label: 'Button',
  variant: 'outline',
};

export const VariantText = Template.bind({});
VariantText.args = {
  label: 'Button',
  variant: 'text',
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  label: 'Button',
  color: 'primary',
  disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  label: 'Button',
  disabled: true,
  variant: 'text',
};

export const WithIconStart = Template.bind({});
WithIconStart.args = {
  label: 'Button',
  color: 'primary',
  startIcon: 'local_grocery_store',
};

export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  label: 'Button',
  color: 'primary',
  endIcon: 'local_grocery_store',
};
