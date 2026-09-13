import { Suspense, use, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/data/technologies.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data: Technology[] = await response.json();

  return data;
};

const technologiesPromise = fetchTechnologies();

const TechnologyList = () => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
          const isAdded = stack.some(
            (item) => item.id === technology.id
          );

          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={isAdded}
              onAdd={handleAddToStack}
            />
          );
        })}
      </div>

      <YourStack
        stack={stack}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

const TechnologyLoading = () => {
  return (
    <div className="flex min-h-80 items-center justify-center">
      <p className="text-gray-500">
        Loading technologies...
      </p>
    </div>
  );
};

const TechnologySection = () => {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="brand-gradient bg-clip-text text-transparent">
          Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      <Suspense fallback={<TechnologyLoading />}>
        <TechnologyList />
      </Suspense>
    </section>
  );
};

export default TechnologySection;