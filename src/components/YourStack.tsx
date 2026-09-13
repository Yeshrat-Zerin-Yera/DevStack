import type { Technology } from "../types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
     <div>
       <h2 className="text-xl font-bold text-gray-900">
       Your Stack
       </h2>

       <p className="mt-1 text-sm text-gray-500">
       {stack.length}{" "}
       {stack.length === 1 ? "Technology" : "Technologies"} Selected
      </p>
     </div>

      {stack.length === 0 ? (
        <p className="mt-8 text-center text-sm text-gray-500">
          <p>Your stack is empty.</p>
          <p>Add technologies to build your stack.</p>
        </p>
      ) : (
        <>
          <div className="mt-6 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {technology.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;