import React from 'react'
import { useSafeBalances } from '../../src'

type Props = {
  value: string | null // ERC20 token contract address, `null` for ETH
  onChange(ev: React.ChangeEvent<HTMLSelectElement>, value: string | null): void
}

export const AssetSelect: React.FC<Props> = ({ value, onChange }) => {
  const [balances] = useSafeBalances()

  return (
    <select
      value={value || ''}
      onChange={(ev) => {
        onChange(ev, ev.target.value || null)
      }}
    >
      {balances.map((balance) => (
        <option key={balance.tokenAddress} value={balance.tokenAddress || ''}>
          {balance.token ? balance.token.name : 'Ether'} (
          {balance.token ? balance.token.symbol : 'ETH'})
        </option>
      ))}
    </select>
  )
}