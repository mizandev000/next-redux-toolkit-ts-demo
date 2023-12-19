import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUsers } from "../../redux/Features/user/userSlice";

const UserView = () => {
  const data = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {data.loading && <h4>Loading...</h4>}
      {!data.loading && data.error && <h3 className="red">{data.error}</h3>}
      {!data.loading && data.users && (
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">List of Users</h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
              </a>
        </div>

        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.users.map((user) => (
              <li key={user.id} className="py-3 sm:py-4">
                  <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {user.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                          </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white ml-24">
                          {user.username}
                      </div>
                  </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
      )}
    </>
  );
};

export default UserView;
