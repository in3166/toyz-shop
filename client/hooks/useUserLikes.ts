import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { useRecoil } from 'hooks/state'
import { IProductItem } from 'types/product'
import { userLikesState } from 'stores/likes'
import { changeLikesList } from 'components/ProductList/ProductItem/changeLikesList'

export const useUserLikes = () => {
  const { data: session } = useSession()
  const [likes, setLikes] = useRecoil(userLikesState)

  useEffect(() => {
    if (session?.user?.id)
      fetch(`/api/users/likes/${session?.user?.id}`).then(async (response) => {
        const result = await response.json()
        if (result?.success) setLikes(result?.likes)
      })
  }, [session, session?.user?.id, setLikes])

  const handleClickLike = useCallback(
    async (
      e: MouseEvent<HTMLButtonElement>,

      product: IProductItem,
      isLiked: boolean,
      setIsLiked: Dispatch<SetStateAction<boolean>>
    ) => {
      e.preventDefault()
      if (!session?.user || !session?.user.id || session?.user.id === 'admin') return
      if (product.owner.id === session?.user.id) return

      setIsLiked((prev) => {
        return !prev
      })

      const tempLikes = changeLikesList(likes, isLiked, product)
      const likesIdList = tempLikes.map((value) => value._id)

      try {
        const response = await fetch(`/api/users/likes/${session?.user.id}`, {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ likes: likesIdList }),
          method: 'PATCH',
        })

        const result = await response.json()
        if (!result.success) {
          setIsLiked((prev) => !prev)
        }
        setLikes(tempLikes)
      } catch (error) {
        setIsLiked((prev) => {
          return !prev
        })
      }
    },
    [likes, session?.user, setLikes]
  )

  return { likes, user: session?.user, handleClickLike }
}
