import { useState } from 'react'
import '../App.css'
import { imgAdd } from './image'

function ImgGallery() {
    const [currentImg, setCurrentImg] = useState(0)


    function previousImg() {
        if (currentImg === 0) {
            setCurrentImg(imgAdd.length - 1)
        }
        setCurrentImg((currentImg) => currentImg - 1)
    }
    function nextImg() {
        if (currentImg === imgAdd.length - 1) {
            setCurrentImg(0)
        }
        setCurrentImg((currentImg) => currentImg + 1)

    }
    console.log(currentImg)
    return (
        <>
            <h3>Image Gallery</h3>
            <div>
                <button onClick={() => previousImg()}>{"<"}</button>
                {imgAdd.map((item, i) => (<img key={item} src={imgAdd[i]} alt="" height={'200px'} style={{ display: currentImg === i ? 'block' : "none" }} />))}

                <button onClick={() => nextImg()}>{">"}</button>
            </div>
        </>
    )
}

export default ImgGallery
