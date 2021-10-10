import { FormEvent } from "react";

type Props = {
  id: string;
  label: string;
  //TODO: any
  onInput: (target: any) => void;
  errorMessage: () => JSX.Element;
};

function wait(milliseconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}

export default function FormInput({ id, label, errorMessage, onInput }: Props) {
  // This component is a bit slow to render...
  wait(25);

  const onInputHandler = (event: FormEvent<HTMLInputElement>) =>
    onInput(event.currentTarget);

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">
        {label}
      </label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onInput={onInputHandler}
        />
        {errorMessage()}
      </div>
    </div>
  );
}
