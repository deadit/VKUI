import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { HasAlign, HasFormStatus, HasRootRef } from '../../types/props';

export interface SelectMimicryProps extends
  HTMLAttributes<HTMLElement>,
  HasAlign,
  HasFormStatus,
  HasRootRef<HTMLElement> {
  multiline?: boolean;
  disabled?: boolean;
}

const SelectMimicry: FunctionComponent<SelectMimicryProps> = ({
  className,
  tabIndex,
  placeholder,
  children,
  align,
  status,
  getRootRef,
  multiline,
  disabled,
  ...restProps
}: SelectMimicryProps) => {
  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? null : tabIndex}
      className={classNames('Select', 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        'Select--disabled': disabled,
        [`Select--align-${align}`]: !!align,
      }, className)}
      getRootRef={getRootRef}
      status={status}
    >
      <div className="Select__container">
        <div className="Select__title">{children || placeholder}</div>
        <Icon24Dropdown />
      </div>
    </FormField>
  );
};

SelectMimicry.defaultProps = {
  tabIndex: 0,
};

export default SelectMimicry;
