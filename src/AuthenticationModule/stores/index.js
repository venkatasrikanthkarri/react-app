import AuthStore from './AuthStore'
import AuthService from '../services/AuthService/index.api'

const authService = new AuthService()
const authStore = new AuthStore(authService)

export default {authStore}
