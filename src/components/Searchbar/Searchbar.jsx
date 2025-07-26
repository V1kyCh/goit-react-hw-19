import { useState } from "react";
import './Searchbar.scss'

export const Searchbar = ({ searchImg }) => {

    const [imageName, setImageName] = useState('')

    const sendSearchedImg = (e) => {
        e.preventDefault()
        searchImg(imageName)
        e.target.children.imgInp.value = ''
    }

    return <header className="searchbar" onSubmit={sendSearchedImg}>
        <form className="form">
            <button type="submit" className="button">
                <span className="button-label">🔍</span>
            </button>

            <input
                name='imgInp'
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={(e) => setImageName(e.target.value)}
            />
        </form>
    </header>

}