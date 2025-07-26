import './ImageGallery.scss'

export const ImageGallery = ({images}) => {
    const openModal = (e) => {
        const modal = document.querySelector('.overlay')
        modal.style.display = 'flex'
        modal.children[0].children[0].src = e.target.dataset.source
        modal.addEventListener('click', () => {
            const modal = document.querySelector('.overlay')
            modal.style.display = 'none'
        })
    }

    return <ul className="gallery">
        {images.map(img => {
            return <li className="gallery-item" key={img.id}>
                <button type="button" onClick={openModal} >
                    <img src={img.previewURL} data-source={img.largeImageURL} />
                </button>
            </li>
        })}
    </ul>
}
