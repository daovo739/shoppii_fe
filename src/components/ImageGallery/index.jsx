import './index.scss'
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'

function ImageGallery({
    isDelete = true,
    images = [],
    handleDeleteImage = () => {},
}) {
    const [showModalDel, setShowModalDelete] = useState(false)
    const [imgSelected, setImgSelected] = useState(
        images.length > 0 ? images[0].image : '',
    )

    useEffect(() => {
        setImgSelected(images.length > 0 ? images[0].image : '')
    }, [images])

    const handleSelectImg = e => {
        console.log(e.target.src)
        setImgSelected(e.target.src)
    }

    return (
        <section className="gallery">
            <div className="gallery_image">
                {isDelete && imgSelected && (
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
                )}
                {imgSelected && (
                    <img
                        className="gallery__img w-100"
                        src={imgSelected}
                        alt=""
                        style={{ objectFit: 'contain' }}
                    />
                )}
            </div>
            <div className="gallery_items">
                {images.map((img, index) => {
                    return (
                        <div className="gallery__item" key={index}>
                            <input
                                type="radio"
                                id={`img-${index}`}
                                name="gallery"
                                className="gallery__selector"
                            />
                            <label
                                htmlFor={`img-${index}`}
                                className="gallery__thumb"
                            >
                                <img
                                    src={img.image}
                                    alt=""
                                    onClick={e => handleSelectImg(e)}
                                    style={{
                                        height: '100px',
                                        width: '100px',
                                    }}
                                />
                            </label>
                        </div>
                    )
                })}
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
                        onClick={() => {
                            handleDeleteImage(imgSelected)
                            setShowModalDelete(false)
                        }}
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
