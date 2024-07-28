const AuthCard = ({ logo, children }) => (
  <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
  {/*//   <div*/}
  {/*//     className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">*/}

      <div>{logo}</div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg
      lg:bg-white lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
        {children}
      </div>
    </div>
    )

    export default AuthCard
