/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Field } from '@base-ui-components/react/field';
import type { InputProps } from './types';

/** @public */
const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    className,
    label,
    description,
    errorMatch = 'customError',
    errorForceShow = false,
    errorMessage = 'An error occurred',
    validationMode = 'onChange',
    size = 'md',
    placeholder,
    required = false,
    style,
    ...rest
  } = props;

  return (
    <Field.Root
      ref={ref}
      className={clsx('canon-input-root', className)}
      style={style}
      validationMode={validationMode}
      {...rest}
    >
      {label && (
        <Field.Label className="canon-input-label">{label}</Field.Label>
      )}

      <Field.Control
        placeholder={placeholder}
        required={required}
        className={clsx('canon-input-control', {
          'canon-input-control-sm': size === 'sm',
          'canon-input-control-md': size === 'md',
        })}
      />

      <Field.Error
        className="canon-input-error"
        match={errorMatch}
        forceShow={errorForceShow}
        // children={errorForceShow ? 'An error occurred' : null}
      />

      {description && (
        <Field.Description className="canon-input-description">
          {description}
        </Field.Description>
      )}
    </Field.Root>
  );
});

Input.displayName = 'Input';

export { Input };
