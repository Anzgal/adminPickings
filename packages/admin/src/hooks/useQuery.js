import React from "react";
import { API } from "aws-amplify";

const LIMIT = 20;

const useQuery = (query) => {
  const [loadingMore, setLoadingMore] = React.useState(false);

  const handleQuery = async (variables = {}) => {
    const { data } = await API.graphql({
      query,
      variables,
    });

    return data;
  };

  const loadMore = async ({ limit, lastToken, ...variables } = {}) => {
    setLoadingMore(true);
    const params = {
      ...variables,
      limit: limit || LIMIT,
      nextToken: lastToken,
    };

    try {
      const response = await handleQuery(params);
      return response;
    } catch (error) {
      console.log("loadMore error", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return { handleQuery, loadMore, loadingMore };
};

export default useQuery;
