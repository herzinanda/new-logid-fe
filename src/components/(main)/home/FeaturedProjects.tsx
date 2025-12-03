import { HomeFeaturedProjectsProps } from "@/types"
import ProjectItem from "./ProjectItem"

const FeaturedProjects = ({
  title,
  description,
}: Readonly<HomeFeaturedProjectsProps>) => {
  return (
    <>
      <section
        className="bg-primary-orange"
        aria-labelledby="featured-projects-title"

      >
        <div
          className="wrapper px-5 py-20 lg:p-20 flex flex-col justify-start items-start gap-20"
        >
          <div
            className="self-stretch flex flex-col lg:flex-row justify-start items-center text-center lg:text-left lg:items-start gap-6"
          >
            <h2
              className="flex-1 justify-start text-base-white text-4xl font-medium leading-tight"
              id="featured-projects-title"
            >
              {title}
            </h2>
            <p
              className="flex-1 justify-start text-base-white-background text-lg font-normal leading-relaxed"
            >
              {description}
            </p>
          </div>

          <ProjectItem />
        </div>
      </section>
    </>
  )
}

export default FeaturedProjects