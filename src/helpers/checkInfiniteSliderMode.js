export const checkInfiniteSliderMode = (slidesToShow, imageSlides, videoSlide) => {
    const totalCount = imageSlides.length + (videoSlide ? 1 : 0)
    return totalCount > slidesToShow
}