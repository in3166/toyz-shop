// import { useCallback } from 'react'
// import store from 'store'

// import { IMovieItem } from 'types/movie'
// import { useRecoil } from 'hooks/state'
// import { favoritesState } from 'states/favoriteItem'
// import { LOCAL_STORAGE_KEY } from 'utils/constants'
// import { IProductItem } from 'types/product'

// interface IUseLikesUpdateProps {
//   selectedItem: IProductItem | null
// }

// const useLikesUpdate = ({ selectedItem }: IUseLikesUpdateProps) => {
//   const [, setFavoriteMovies] = useRecoil(favoritesState)

//   const removeFromLikes = useCallback(() => {
//     if (!selectedItem) return

//     let localLikes = store.get(LOCAL_STORAGE_KEY)
//     localLikes = localLikes.filter(
//       (favoriteItem: IMovieItem) =>
//         favoriteItem.title !== selectedItem.title && favoriteItem.imdbID !== selectedItem.imdbID
//     )

//     store.remove(LOCAL_STORAGE_KEY)
//     store.set(LOCAL_STORAGE_KEY, localLikes)
//     setFavoriteMovies(localLikes)
//   }, [setFavoriteMovies, selectedItem])

//   const addToLikes = useCallback(() => {
//     if (!selectedItem) return
//     const localLikes = store.get(LOCAL_STORAGE_KEY)
//     if (localLikes) {
//       localLikes.push({ ...selectedItem, isLiked: true })
//       store.set(LOCAL_STORAGE_KEY, localLikes)
//     } else {
//       store.set(LOCAL_STORAGE_KEY, [selectedItem])
//     }
//     setFavoriteMovies(localLikes)
//   }, [setFavoriteMovies, selectedItem])

//   return { removeFromLikes, addToLikes }
// }

// export default useLikesUpdate
export {}
