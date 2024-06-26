"use client";

import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

interface Props {
  tags: { id: string; tag: string }[];
  renderInputCustom: React.ReactNode | ((params: any) => React.ReactNode);
  renderOptionCustom: React.ReactNode | ((params: any) => React.ReactNode);
  defaultValue: string[];
  handleTagSelection?: (tags: string[]) => void;
}

const TagAutocomplete: React.FC<Props> = ({
  tags,
  renderInputCustom,
  renderOptionCustom,
  defaultValue,
  handleTagSelection,
}) => {
  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={tags.map((_tag) => _tag.tag)}
      defaultValue={defaultValue}
      freeSolo
      onChange={(event, value) => {
        handleTagSelection?.(value);
      }}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((label: string, index: number) => (
          <div key={label} id={`tag-${index}`}>
            <Chip
              variant="outlined"
              label={label}
              {...getTagProps({ index })}
            />
          </div>
        ))
      }
      renderInput={(params) =>
        typeof renderInputCustom === "function"
          ? renderInputCustom(params)
          : renderInputCustom
      }
      renderOption={(props, option, { selected }) =>
        typeof renderOptionCustom === "function"
          ? renderOptionCustom({ props, option, selected })
          : renderOptionCustom
      }
    />
  );
};

export default TagAutocomplete;
