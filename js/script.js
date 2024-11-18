

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
        
        
        paragrapheIdConseil.textContent = "Advice #"+ idConseil;
        paragrapheConseil.textContent = `"${donnee.slip.advice}"`;
        
       
    } catch (error) {
        // Gestion des erreurs avec un bloc try/catch
        console.error('Erreur :', error.message);
    }
}
afficherConseils();

document.getElementById("boutonAleatoire").addEventListener("click", afficherConseils);

paragrapheConseil.textContent = `"${paragrapheConseil.textContent}"`;