import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(technology)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;