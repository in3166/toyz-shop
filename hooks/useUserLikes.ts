import { useRecoil } from 'hooks/state'
import { useEffect } from 'react'
import { userLikesState } from 'stores/likes'
import { useSession } from 'next-auth/react'

export const useUserLikes = () => {
  const { data: session } = useSession()
  const [likes, setLikes] = useRecoil(userLikesState)

  useEffect(() => {
    if (session?.user?.id)
      fetch(`/api/users/${session?.user?.id}`).then(async (response) => {
        const result = await response.json()
        if (result?.success) setLikes(result?.user?.likes)
      })
  }, [session?.user?.id, setLikes])

  return { likes, setLikes, user: session?.user }
}
