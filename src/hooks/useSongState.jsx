import React, { useState } from "react";

export const useSongState = () => {
  const [search, setsearch] = useState({
    artist: '',
    song: '',
  });
  
  const handleSearch = ({target}) => {
    // debugger
    const { name, value } = target;
    setsearch({
      ...search,
      [name]: value
    });
  };
  return {
    search,
    setsearch,
    handleSearch,
  };
};
