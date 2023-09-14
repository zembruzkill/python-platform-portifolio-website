'use client'

import { signIn } from 'next-auth/react'

import { FaGithubAlt } from "react-icons/fa6";

function GitHubSignInButton(props: any) {
  const handleGitHubSignIn = () => {
    signIn('github')
  }

  return (
    <>
      <button onClick={handleGitHubSignIn} className="flex w-full font-bold text-black items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
        <span>
          <FaGithubAlt size={20} />
        </span>
        {props.name}
      </button>
    </>
  )
}

export default GitHubSignInButton


