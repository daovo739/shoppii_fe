import './index.scss'
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'

function ImageGallery() {
    const [showModalDel, setShowModalDelete] = useState(false)
    const [imgSelected, setImgSelected] = useState(
        'https://picsum.photos/id/1015/600/400.jpg',
    )

    const handleSelectImg = e => {
        console.log(e.target.src)
        setImgSelected(e.target.src)
    }

    const handleDeleteImage = e => {}

    return (
        <section className="gallery">
            <div className="gallery_image">
                <IconButton
                    className="gallery__img--clear"
                    onClick={() => setShowModalDelete(true)}
                >
                    <Clear
                        sx={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                        }}
                    />
                </IconButton>
                <img className="gallery__img" src={imgSelected} alt="" />
            </div>
            <div className="gallery_items">
                <div className="gallery__item">
                    <input
                        type="radio"
                        id="img-1"
                        name="gallery"
                        className="gallery__selector"
                    />
                    <label htmlFor="img-1" className="gallery__thumb">
                        <img
                            src="https://picsum.photos/id/1015/150/100.jpg"
                            alt=""
                            onClick={e => handleSelectImg(e)}
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

                    <label htmlFor="img-2" className="gallery__thumb">
                        <img
                            src="https://picsum.photos/id/1039/150/100.jpg"
                            alt=""
                            onClick={e => handleSelectImg(e)}
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

                    <label htmlFor="img-3" className="gallery__thumb">
                        <img
                            src="https://picsum.photos/id/1057/150/100.jpg"
                            alt=""
                            onClick={e => handleSelectImg(e)}
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

                    <label htmlFor="img-4" className="gallery__thumb">
                        <img
                            src="https://picsum.photos/id/106/150/100.jpg"
                            alt=""
                            onClick={e => handleSelectImg(e)}
                        />
                    </label>
                </div>
            </div>
            <Modal
                show={showModalDel}
                onHide={() => setShowModalDelete(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{
                            fontSize: '2rem',
                        }}
                    >
                        Bạn muốn xóa ảnh này?{' '}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModalDelete(false)}
                        className="btnModal"
                    >
                        Hủy
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleDeleteImage}
                        className="btnModal"
                    >
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default ImageGallery
