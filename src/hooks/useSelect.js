import React, { useState } from 'react'

const useSelect = (stateInitial, options) => {
  //state of custom Hook (select one state andupdate this state)
  const [state, setState] = useState(stateInitial)

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
  return [state, SelectNews]
}

export default useSelect
