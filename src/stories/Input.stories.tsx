import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Devchallenges/Input',
  component: Input,
  argTypes: {
    row: {
      table: {
        disable: true,
      },
    },
    multiline: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
  onChange: () => {},
  label: 'Label',
};

export const InputError = Template.bind({});
InputError.args = {
  onChange: () => {},
  label: 'Label',
  error: true,
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  onChange: () => {},
  label: 'Label',
  disabled: true,
};

export const InputMedium = Template.bind({});
InputMedium.args = {
  onChange: () => {},
  size: 'md',
  label: 'Label',
};

export const InputSmall = Template.bind({});
InputSmall.args = {
  onChange: () => {},
  size: 'sm',
  label: 'Label',
};

export const InputFullWidth = Template.bind({});
InputFullWidth.args = {
  onChange: () => {},
  label: 'Label',
  fullWidth: true,
};

export const WithIconStart = Template.bind({});
WithIconStart.args = {
  onChange: () => {},
  label: 'Label',
  startIcon: true,
};

export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  onChange: () => {},
  label: 'Label',
  endIcon: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  onChange: () => {},
  label: 'Label',
  helperText: 'Some interesting text',
};

export const WithHelperTextError = Template.bind({});
WithHelperTextError.args = {
  onChange: () => {},
  label: 'Label',
  error: true,
  helperText: 'Some interesting text',
};
