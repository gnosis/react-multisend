import React from 'react'

import {
  CallContractTransactionInput,
  NetworkId,
  useContractCall,
} from '../../src'

import { AbiFormat, AbiInput } from './AbiInput'
import { AddressInput } from './AddressInput'

interface Props {
  value: CallContractTransactionInput
  onChange(value: CallContractTransactionInput): void
  network: NetworkId
  blockExplorerApiKey?: string
}

export const CallContract: React.FC<Props> = (props) => {
  const { value, onChange } = props
  const { functions, payable, inputs, loading } = useContractCall(props)

  return (
    <fieldset>
      <label>
        <span>Contract</span> <i>address</i>
        <AddressInput
          value={value.to}
          onChange={(ev, to) => onChange({ ...value, to })}
        />
      </label>
      <label>
        <span>ABI</span>
        <AbiInput
          value={value.abi}
          onChange={(ev) => onChange({ ...value, abi: ev.target.value })}
          format={AbiFormat.FULL}
        />
      </label>
      <label>
        <span>Method</span>
        <select
          disabled={loading || !value.abi}
          value={value.functionSignature}
          onChange={(ev) =>
            onChange({
              ...value,
              functionSignature: ev.target.value,
              inputValues: {},
            })
          }
        >
          {functions.map((func) => (
            <option key={func.signature} value={func.signature}>
              {func.name}
            </option>
          ))}
        </select>
      </label>
      {payable && (
        <label>
          <span>Value (wei)</span>
          <input
            type="number"
            value={value.value}
            onChange={(ev) => onChange({ ...value, value: ev.target.value })}
          />
        </label>
      )}
      {inputs.length > 0 ? (
        <fieldset>
          {inputs.map((input) => (
            <label key={input.name}>
              {input.name} <i>{input.type}</i>
              <input
                type="text"
                value={`${input.value || ''}`}
                onChange={(ev) =>
                  onChange({
                    ...value,
                    inputValues: {
                      ...value.inputValues,
                      [input.name]: ev.target.value,
                    },
                  })
                }
              />
            </label>
          ))}
        </fieldset>
      ) : null}
    </fieldset>
  )
}
