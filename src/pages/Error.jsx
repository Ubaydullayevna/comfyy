import { useRouteError, Link } from "react-router-dom"

function Error() {
  const error = useRouteError()


  if (error.status === 404) {
  return(
    <div className="flex justify-center items-center min-h-[100vh] ">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-lg leading-3"> Sorry, we couldn't find the page you are looking for</p>
        <div className="mt-10 ">
          <Link to='/' className="btn btn-secondary"> Go Back Home </Link>
        </div>
      </div>
    </div>
  )
  }

  
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <h4 className="text-center font-bold text-4xl"> This is some error</h4>
    </div>
  )
}

export default Error