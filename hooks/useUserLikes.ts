import { useRecoil } from 'hooks/state'
import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useState } from 'react'
import { userLikesState } from 'stores/likes'
import { useSession } from 'next-auth/react'
import { IProductItem } from 'types/product'
import { changeLikesList } from 'components/ProductList/ProductItem/changeLikesList'

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

      console.log('tempLikes; ', tempLikes)
      const likesIdList = tempLikes.map((value) => value._id)
      console.log('likesIdList; ', likesIdList)
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
