class Song {
  private title: string;
  private genre: string;
  private author: string;

  constructor(title: string, genre: string) {
    this.title = title;
    this.genre = genre;
  }

  public getAuthor = (): string => {
    return this.author;
  };

  public setAuthor = (author: string): void => {
    this.author = author;
  };

  public showAllData = (): void => {
    console.log(`Title: ${this.title}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Author: ${this.author}`);
  };
}

const song = new Song("Woofer", "Lofi");

song.setAuthor("ChillLofi");
console.log(`Author: ${song.getAuthor()}`);

song.showAllData();
