export const getFilteredData = (search, resList) => {
    return resList.filter((res) => {
      return res.data.name.toLowerCase().includes(search.toLowerCase());
    });
  };