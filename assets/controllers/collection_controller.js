import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['list'];
    static values = { prototype: String, index: Number };

    // Au chargement : ajoute un bouton "Supprimer" aux lignes déjà existantes (page edit)
    connect() {
        this.listTarget.querySelectorAll('li').forEach(li => this.ajouterBoutonSupprimer(li));
    }

    // Clic sur "+ Ajouter un ingrédient"
    add() {
        const html = this.prototypeValue.replace(/__name__/g, this.indexValue);
        const li = document.createElement('li');
        li.innerHTML = html;
        this.ajouterBoutonSupprimer(li);
        this.listTarget.appendChild(li);
        this.indexValue++;
    }

    ajouterBoutonSupprimer(li) {
        const bouton = document.createElement('button');
        bouton.type = 'button';
        bouton.textContent = 'Supprimer';
        bouton.addEventListener('click', () => li.remove());
        li.appendChild(bouton);
    }
}
