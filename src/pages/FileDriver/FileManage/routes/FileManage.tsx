import { useNotification } from "src/hooks/useNotification";
import { useGetAllFile } from "../api/getAllFile";

export const FileManage = () => {
  // const { addNotification } = useNotification();
  const { data } = useGetAllFile({});
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data?.data.map((item) => {
          return (
            <div
              key={item.id}
              className="h-[130px] sm:h-[120px] md:h-[130px] xl:h-[150px] 2xl:h-[180px]"
            >
              {item.type === "FOLDER" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                  />
                </svg>
              ) : (
                <img
                  className="h-full w-full rounded-lg cursor-pointer hover:scale-110 shadow-lg hover:shadow-white"
                  src={`http://localhost:3333/hachee/api/upload/get-file/${item.path}`}
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
