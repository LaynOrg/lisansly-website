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

export type PlanProps = {
  name: string;
  description: string;
  list: string[];
  price: number;
  mostPopular?: boolean;
};
