import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "./Button";
import { IconsNames } from "./Icon";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

export const PrimaryButton: React.VFC = () => (
  <div className="flex">
    <div>
      Default:
      <Button color="primary" size="small" />
      <Button color="primary" size="regular" />
      <Button color="primary" size="large" />
    </div>
    <div>
      Outline:
      <Button color="primary" size="small" format="outline" />
      <Button color="primary" size="regular" format="outline" />
      <Button color="primary" size="large" format="outline" />
    </div>
    <div>
      Default with icon:
      <Button
        color="primary"
        size="small"
        format="default"
        icon={IconsNames.planet}
      />
      <Button
        color="primary"
        size="regular"
        format="default"
        icon={IconsNames.planet}
      />
      <Button
        color="primary"
        size="large"
        format="default"
        icon={IconsNames.planet}
      />
    </div>
  </div>
);

export const ErrorButton: React.VFC = () => (
  <div className="flex">
    <div>
      Default:
      <Button color="error" size="small" />
      <Button color="error" size="regular" />
      <Button color="error" size="large" />
    </div>
    <div>
      Outline:
      <Button color="error" size="small" format="outline" />
      <Button color="error" size="regular" format="outline" />
      <Button color="error" size="large" format="outline" />
    </div>
    <div>
      Outline with icon:
      <Button
        color="error"
        size="small"
        format="outline"
        icon={IconsNames.planet}
      />
      <Button
        color="error"
        size="regular"
        format="outline"
        icon={IconsNames.planet}
      />
      <Button
        color="error"
        size="large"
        format="outline"
        icon={IconsNames.planet}
      />
    </div>
  </div>
);
