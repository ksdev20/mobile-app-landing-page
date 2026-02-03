export type subMenuItemType = {
  label: string;
  link: string;
};

export type subMenuType = {
  subMenuItems: subMenuItemType[];
};

export type navLinkType = {
  label: string;
  link: string;
  submenu?: subMenuType | undefined;
};