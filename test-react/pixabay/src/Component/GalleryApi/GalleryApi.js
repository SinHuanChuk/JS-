import axios from "axios"
const key = '19312549-a0ff2c4a175ff1a1853f83c49';

function axiosImage(query, page = 1) {
    return (
        axios
        .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=20`)
    )
}

export { axiosImage }