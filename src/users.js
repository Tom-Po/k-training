import './users.css'

const users = ["John", "Alice", "Bob"]

// Problématique : 

// 1. Les utilisateurs ne sont pas affichés dans l'ordre alphabétique
// Utiliser une fonction pour trier les utilisateurs suivant cet ordre
// Voir doc tableaux sur mdn :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// 2. Les userCards pourraient bénéficier d'un style un peu plus marquant
// Ajouter une ombre et un effet de curseur au hover (survol)
// Tu auras besoin du CSS, j'ai déjà proposé une variable pour l'ombre que tu peux réutiliser
// Pour le curseur je te laisse te reférer à la doc "cursor"
// Les bords de cartes sont un peu "raide", ajouter un border-radius une variable existe déjà en CSS

export default function renderUserList() {
    const userCards = document.createElement('div')
    userCards.classList.add('user-cards')

    users.forEach((userName, index) => {
        let userCard = document.createElement('div')
        let userContent = document.createElement('div')
        let avatar = document.createElement('img')
        let content = document.createTextNode(userName)

        userCard.classList.add('user-card')
        userContent.classList.add('user-content')

        // Random user Avatar from FaceUI Api
        // Bon Alice a un problème d'identité de genre
        let userAvatar = "https://randomuser.me/api/portraits/men/3" + index + ".jpg"

        avatar.src = userAvatar;

        userCard.append(avatar)
        userCard.append(content)

        userCards.append(userCard)
    })

    return userCards
}