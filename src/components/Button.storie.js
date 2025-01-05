import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  onClick: () => alert("Button clicked!"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  onClick: () => alert("Another button clicked!"),
};
