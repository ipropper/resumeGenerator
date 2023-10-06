import * as React from "react";

interface LabeledTextArea {
  label: string;
  rows?: number;
}

export const LabeledTextArea: React.FC<
  React.HTMLProps<HTMLTextAreaElement> & LabeledTextArea
> = ({ label, id, rows, ...props }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={id}
          rows={rows || 3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          {...props}
        />
      </div>
    </>
  );
};
