import { useRef, useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/router'

import { useOnClickOutside } from 'hooks'
import { SearchIcon } from 'public/svgs'
import { cx } from 'styles'
import styles from './searchBar.module.scss'
import { BASE_URL } from 'src/fixtures'

const SearchBar = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

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
    if (!searchText || searchText.trim() === '') {
      return
    }
    router.push(`${BASE_URL}/marketplace/?text=${searchText}`)
    handleCloseSearchBar()
  }

  return (
    <div className={styles.searchBox} ref={formRef}>
      <button
        type='button'
        onClick={handleOpenSearchBar}
        aria-label='SearchBar Toggle'
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
