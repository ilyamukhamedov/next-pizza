"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  const token = process.env.NEXT_PUBLIC_DADATA_TOKEN;

  if (!token) {
    console.error(
      "API token for DaData is not set. Please check your .env file."
    );
    return null;
  }

  return (
    <AddressSuggestions
      token={token}
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
