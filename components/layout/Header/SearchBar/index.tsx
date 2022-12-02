import { useRef, useState, ChangeEvent, FormEvent } from 'react'

import { useAppDispatch, useOnClickOutside } from 'hooks'
import { searchProduct } from 'stores/reducer/product'
import { SearchIcon } from 'public/svgs'
import { cx } from 'styles'
import styles from './searchBar.module.scss'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  const dispatch = useAppDispatch()

  const focusRef = useRef<HTMLInputElement>(null)

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleOpenSearchBar = () => {
    setToggleSearchBar(true)
    focusRef.current?.focus()
  }

  const handleCloseSearchBar = () => {
    setToggleSearchBar(false)
    setSearchText('')
  }

  const formRef = useOnClickOutside(handleCloseSearchBar)

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchProduct(searchText))
    router.push('/search')
  }

  return (
    <div className={styles.searchBox} ref={formRef}>
      <button
        type='button'
        onClick={handleOpenSearchBar}
        className={cx(styles.searchToggleButton, { [styles.hideToggleButton]: toggleSearchBar })}
      >
        <SearchIcon />
      </button>

      <form
        onSubmit={handleSubmitSearch}
        className={cx(styles.searchForm, { [styles.searchFormOpen]: toggleSearchBar })}
      >
        <input
          type='text'
          title='Search Bar'
          ref={focusRef}
          name='searchInputText'
          value={searchText}
          onChange={handleChangeSearchText}
          className={cx(styles.searchInput)}
        />
        <button
          type='submit'
          className={cx(styles.submitButton, { [styles.hideSearchSubmitButton]: !toggleSearchBar })}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
