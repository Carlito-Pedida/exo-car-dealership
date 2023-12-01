useEffect(() => {
  // function to fetch and filter the products depending on what is in the params
  async function fetch() {
    await filterProducts(params.filter).then((response) => {
      setProducts(response);
    });
  }
  fetch();
}, [params]);
