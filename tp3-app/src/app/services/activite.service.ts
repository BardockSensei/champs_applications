// ng generate service NomService

export class ActiviteService {
  objectifs: { title: string; description: string }[] = [];

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, title: string, description: string) {
    if (title != '') this.objectifs[index].title = title;
    if (description != '') this.objectifs[index].description = description;
  }
}
