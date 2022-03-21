import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Devchallenges/Multiline Input',
  component: Input,
  argTypes: {
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const MultilineInput = Template.bind({});
MultilineInput.args = {
  onChange: () => {},
  label: 'Label',
  multiline: true,
};
