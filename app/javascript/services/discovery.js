import Api from './api'

const AlbumsService = {
    idex: () => Api.get('/dashboard')
}

export default AlbumsService;