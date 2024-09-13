import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mn-3">Price from/to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={30000} placeholder="30000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingridients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Cheese sause",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Cheese sause",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Chesse sause",
            value: "7",
          },
          {
            text: "Mozzarella",
            value: "8",
          },
          {
            text: "Garlic",
            value: "9",
          },
          {
            text: "Pickles",
            value: "10",
          },
          {
            text: "Red onion",
            value: "11",
          },
          {
            text: "Tomatoes",
            value: "12",
          },
        ]}
      />
    </div>
  );
};
