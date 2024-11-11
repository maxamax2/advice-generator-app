
// async function affichageConseils() {


//     const urlApi = 'https://api.adviceslip.com/advice';
//     const idConseil = '	https://api.adviceslip.com/advice/{slip_id}';

//     fetch(urlApi)
//         .then(response => response.json())
//         .then(data => {

//             console.log(data);
//             const paragrapheConseil = document.getElementById("conseilDuJour");
//             // Bouclez sur les données pour afficher les universités
//             data.forEach(universite => {
//                 const listUni = document.createElement("li");
//                 listUni.textContent = universite.name;
//                 paragrapheConseil.appendChild(listUni);
//                 console.log(listUni.textContent);
//             });
//         })
//         .catch(error => console.error('Erreur:', error));
// }

// affichageConseils();
const paragrapheIdConseil = document.getElementById("idConseil");
const paragrapheConseil = document.getElementById("conseilDuJour");
// URL de l'API avec la demande de 5 utilisateurs
        
async function afficherConseils() {
    const urlApi = 'https://api.adviceslip.com/advice';
    
    try {
        // Récupération des données avec fetch et await
        const reponse = await fetch(urlApi);
        const donnee = await reponse.json();
        const idConseil = donnee.slip.id;
        
        
        paragrapheIdConseil.textContent += idConseil;
        paragrapheConseil.textContent = `"${donnee.slip.advice}"`;
        
       
    } catch (error) {
        // Gestion des erreurs avec un bloc try/catch
        console.error('Erreur :', error.message);
    }
}
afficherConseils();

paragrapheConseil.textContent = `"${paragrapheConseil.textContent}"`;