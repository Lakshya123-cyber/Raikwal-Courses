"use client";

import { Category } from "@prisma/client";
import {
  FaAppStoreIos,
  FaHtml5,
  FaRobot,
  FaClone,
  FaGamepad,
  FaPhotoVideo,
} from "react-icons/fa";

import { IconType } from "react-icons";
import { CategoryItems } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Apps: FaAppStoreIos,
  Web: FaHtml5,
  AI: FaRobot,
  Clones: FaClone,
  Games: FaGamepad,
  Photography: FaPhotoVideo,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItems
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
