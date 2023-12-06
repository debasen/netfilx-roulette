// utils/useSearchParams.js
import { useRouter } from 'next/router';

const useSearchParams = () => {
  const router = useRouter();

  const setSearchParams = (newParams) => {
    const { pathname, query } = router;
    const updatedQuery = { ...query, ...newParams };
    router.push({ pathname, query: updatedQuery });
  };

  const getSearchParams = () => {
    return router.query;
  };

  const getSearchParam = (key) => {
    return router.query[key];
  };

  return { setSearchParams, getSearchParams, getSearchParam };
};

export default useSearchParams;
