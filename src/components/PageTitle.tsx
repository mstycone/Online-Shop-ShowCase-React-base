import type { IPageTitleProps } from "@/interfaces/interfaces"

export const PageTitle = ({pageTitle}: IPageTitleProps) => {
  return (
    <h1 className="text-3xl font-bold mb-20 text-left">
        {pageTitle}
    </h1>
  )
}
