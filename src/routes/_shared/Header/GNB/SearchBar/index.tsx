import { useRef, useState, ChangeEvent, FormEvent, useCallback, RefObject } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useErrorHandler } from 'react-error-boundary'
import { useRecoil } from 'hooks/state'

import { cx } from 'styles'
import styles from './searchBar.module.scss'
import { useOnClickOutside } from 'hooks'
import { SearchIcon } from 'assets/svgs'

interface ISearchBarProps {
  // listRef?: RefObject<HTMLElement>
}

const SearchBar = ({}: ISearchBarProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

  // const [, setCurrentPage, resetCurrentPage] = useRecoil(currentPageState)
  // const [, setMovies, resetMovies] = useRecoil(moviesState)
  // const [, setError, resetError] = useRecoil(errorMovieState)

  const focusRef = useRef<HTMLInputElement>(null)
  const handleError = useErrorHandler()

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
