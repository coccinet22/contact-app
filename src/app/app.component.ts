/*Pour déclarer une classe comme composant de notre appli , on importe "component" via @angular/core
*/import { Component } from '@angular/core';
//C'est ce qu'on appelle
@Component({
  //Le sélecteur est l'ID, l'identifiant unique du composant au sein de l'application
  selector: 'app-root',
  // C'est la partie visible de notre composant
  //C'est ce qui s'affiche à notre utilisateur
  templateUrl: './app.component.html',
  //Déclarer les styles css spécifique à ce composant
  styleUrls: ['./app.component.css']
})
// La classe contient les données du composant
// Dans notre architecture MVM, notre classe correspond au Model
export class AppComponent {
  // Déclaration d'une variable /propriété
  title ='Gestion de contacts';
  contactProfil = null;

  // Déclaration d'un objet contact
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'hugo@biyn.media',
    tel: '07 83 97 15 15'
  };

// Tableau tous les contacts
mesContacts=[
  {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'hugo@biyn.media',
    tel: '07 83 97 15 15'
  },
  {
    id: 2,
    name: 'Vanessa DEHECQ',
    email: 'vanessa.dehecq@gmail.com',
    tel: '07 89 45 23 56'
  },
  {
    id: 3,
    name: 'Manon DERYDT',
    email: 'manon.derydt@gmail.com',
    tel: '07 96 52 41 23'
  },
  {
    id: 4,
    name: 'Olga KORDIAK',
    email: 'olga.kordiak@gmail.com',
    tel: '01 56 89 78 45'
  }
];
// Permet d'afficher les infos d'un contact objet

displayContact(contactCliqueParUtilisateur): void {
  //console.log(contactCliqueParUtilisateur);
  this.contactProfil =contactCliqueParUtilisateur;
}
//Cette fonction est automatiquement appelée par Angular lorsqu'un nouveau contact est créée
addContact(contact): void {
this.mesContacts.push(contact);
}
}
