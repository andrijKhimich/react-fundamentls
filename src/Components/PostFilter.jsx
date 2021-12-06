import React from "react";
import MyInput from "./UI/Input/Input";
import Select from "./UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {

  return (
    <div>
      <MyInput value={filter.query} onChange={e => setFilter({ ...filter, query: e.target.value})} placeholder="Search" />
      <hr style={{ "margin": "15px 0" }} />

      <Select defaultValue="Sort by"
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={
          [
            {
              value: "title",
              name: "By name"
            },
            {
              value: "content",
              name: "By description"
            }
          ]
        }
      />
     </div>
  )
}

export default PostFilter;