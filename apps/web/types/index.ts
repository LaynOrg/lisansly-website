import type { LinkProps } from "ui/types";

export type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

export type LicensingOptionProps = LinkProps & {
  description: string;
  icon: string;
};

export type SocialProps = LinkProps & {
  icon: string;
};
