import {useEffect, useMemo, useRef, useState} from 'react'
import styles from './PhoneProject.module.scss'

export const PhoneProject = () => {
  const allImages = useMemo(
    () => [
      '/assets/img/secondPhone.png',
      '/assets/img/thirdPhone.png',
      '/assets/img/firstPhone.png',
    ],
    []
  )
  const [mainImg, setMainImg] = useState('/assets/img/firstPhone.png')

  const [anotherImages, setAnotherImages] = useState([
    '/assets/img/secondPhone.png',
    '/assets/img/thirdPhone.png',
  ])
  const firstImage = useRef<HTMLImageElement | null>(null)
  const secondImage = useRef<HTMLImageElement | null>(null)
  const mainImageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const newAnotherImages = [] as string[]
    for (let image of allImages) {
      if (image === mainImg) {
        continue
      } else {
        newAnotherImages.push(image)
      }
    }

    setAnotherImages(newAnotherImages)
  }, [mainImg, allImages])

  const onImageClick = (index: number) => {
    if (firstImage.current && secondImage.current && mainImageRef.current) {
      firstImage.current.style.rotate = '5deg'
      firstImage.current.style.left = '150px'
      secondImage.current.style.rotate = '-5deg '
      secondImage.current.style.right = '150px'
      setTimeout(() => {
        if (firstImage.current && secondImage.current && mainImageRef.current) {
          firstImage.current.style.rotate = '-5deg'
          firstImage.current.style.left = '60px'
          secondImage.current.style.rotate = '5deg'
          secondImage.current.style.right = '60px'
          setMainImg(anotherImages[index])
          mainImageRef.current.style.opacity = '1'
        }
      }, 1000)
    }
  }

  return (
    <div className={styles.portfolioCard}>
      <img className={styles.blind} src="/assets/blinds/orange.png" alt="" />
      <div className={styles.images}>
        <img
          ref={firstImage}
          className={styles.anotherImage}
          onClick={() => onImageClick(0)}
          src={anotherImages[0]}
          alt=""
        />
        <img
          ref={mainImageRef}
          className={styles.mainImg}
          src={mainImg}
          alt=""
        />
        <img
          ref={secondImage}
          className={styles.anotherImage}
          onClick={() => onImageClick(1)}
          src={anotherImages[1]}
          alt=""
        />
      </div>
      <div className={styles.text}>
        <div className={styles.textTitle}>
          <h3>Mobile booking APP</h3>
          <hr />
        </div>
        <div className={styles.skills}>
          <p>Work:</p>
          <div>
            <h5>UX Design</h5>
            <h5>UI Design</h5>
            <h5>User Flow</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
