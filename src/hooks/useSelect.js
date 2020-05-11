import React, {useState} from 'react'

const useSelect = ( stateInitial, options ) => {

    //state of custom Hook
    const [state, setState]= useState('')

  const SelectNews = () => (
    <select className="browser-default">
      <option value="">Select</option>
    </select>
  )
  return [state, SelectNews]
}

export default useSelect
