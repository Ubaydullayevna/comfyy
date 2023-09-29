import { useRouteError } from "react-router-dom"

function ErrorElement() {
    const error = useRouteError()
  return (
    <div>
        <h4 className="font-bold text-4xl"> There are an error</h4>
    </div>
  )
}

export default ErrorElement