import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  //Cache l'items-list
  isShowNewContainer = "none"
  deleteTaskContainer1 = "block"
  deleteTaskContainer2 = "block"

  //Texte et couleur du bouton ajouter une tâche
  addButtonText = "Ajouter une Tâches"
  addButtonColor = "btn-dark"

  constructor() { }

  ngOnInit(): void {
    // console.log(document.getElementById("h5")?.textContent)
  }

  //Afhiche items-list par click sur bouton
  onPressNewTask() {
    //Affiche si pas affiché
    if (this.isShowNewContainer == "none") {
      this.isShowNewContainer = "block";
      this.addButtonText = "Annuler"
      this.addButtonColor = "btn-danger"
      //mettre le curseur sur le champs texte labal tâche
        document.getElementById("task")?.focus();
    }
    //Cache si affiché
    else if (this.isShowNewContainer == "block") {
      this.isShowNewContainer = "none";
      this.addButtonText = "Ajouter une Tâches"
      this.addButtonColor = "btn-dark"
    }
  }

  //Delete task 1
  delete1()
  {
    this.deleteTaskContainer1 = "none"
  }

  //Delete task 2
  delete2()
  {
    this.deleteTaskContainer2 = "none"
  }

}
