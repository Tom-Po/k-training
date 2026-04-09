import './style.css'
import renderUserList from "./users";

const app = document.getElementById("app")

const userCards = renderUserList()

app.append(userCards)