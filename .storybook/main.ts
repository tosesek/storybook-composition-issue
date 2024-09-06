import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./Intro.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: () => ({
    react1: {
      title: "React1",
      url: "http://localhost:6006",
    },
    amber: {
      title: "Amber",
      url: "http://localhost:6007",
    },
  }),
};
export default config;
