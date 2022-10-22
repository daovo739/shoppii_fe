import './index.scss'
import { useState } from 'react'

function ImageGallery() {
    const [checked, setChecked] = useState(true)
    return (
        <section className="gallery">
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-1"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1015/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-1" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/1015/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-2"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1039/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-2" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/1039/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-3"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/1057/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-3" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/1057/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-4"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/106/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-4" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/106/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-5"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/106/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-5" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/106/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
            <div className="gallery__item">
                <input
                    type="radio"
                    id="img-6"
                    name="gallery"
                    className="gallery__selector"
                />
                <img
                    className="gallery__img"
                    src="https://picsum.photos/id/106/600/400.jpg"
                    alt=""
                />
                <label htmlFor="img-6" className="gallery__thumb">
                    <img
                        src="https://picsum.photos/id/106/150/100.jpg"
                        alt=""
                    />
                </label>
            </div>
        </section>
    )
}

export default ImageGallery
