import { PageTitle } from "@components"
import type { IPageTitleProps } from "@interfaces/interfaces"


export const SignIn = ({pageTitle}: IPageTitleProps) => {
  return (
    <div className="px-8 py-1">
      <PageTitle
        pageTitle={pageTitle}
      />
      <span> Welcome to the {pageTitle} page</span>
    </div>
  )
}