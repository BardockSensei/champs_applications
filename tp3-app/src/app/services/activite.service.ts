export class ActiviteService {
  objectifs: string[] = [];

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }
}
