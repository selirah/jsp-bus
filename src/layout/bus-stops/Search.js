import React from 'react'
import { InputGroup, Input } from 'reactstrap'

const Search = (props) => {
  const { onSearch } = props
  return (
    <InputGroup>
      <Input
        placeholder="Search for bus station"
        onChange={onSearch}
        name="query"
      />
    </InputGroup>
  )
}

export default Search
