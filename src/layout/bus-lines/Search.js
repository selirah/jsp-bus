import React from 'react'
import { InputGroup, Input } from 'reactstrap'

const Search = (props) => {
  const { onSearch } = props
  return (
    <InputGroup>
      <Input
        placeholder="Search for bus lines..."
        name="query"
        onChange={onSearch}
      />
    </InputGroup>
  )
}

export default Search
