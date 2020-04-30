import CounterStore from './CounterStore'
import TodoApp from './TodoStoreUsingServicesandApiSause'
import TodoService from '../services/TodoService/index.api.js'
import UserService from  '../services/UserService/index.api.js'
import AuthStore from '../AuthenticationModule/stores/AuthStore'
import AuthService from '../AuthenticationModule/services/AuthService/index.api'
import ProductService from '../E_CommerceAppModule/services/ProductService/index.api'
import ProductStore from '../E_CommerceAppModule/stores/ProductStore'
import CartStore from '../E_CommerceAppModule/stores/CartStore'
// import users from '../services/UserService/index.fixtures.js'

import UserStore from './UserStore'

const userService=new UserService()
const todoService=new TodoService()

const usersStore=new UserStore(userService)
const todoStore=new TodoApp(todoService)

const counterStore = new CounterStore()

const authService = new AuthService()
const authStore = new AuthStore(authService)

const productService = new ProductService()
const productStore = new ProductStore(productService)

const cartStore = new CartStore(productStore)
export default{
  counterStore,
  usersStore,
  todoStore,
  authStore,
  productStore,
  cartStore
}