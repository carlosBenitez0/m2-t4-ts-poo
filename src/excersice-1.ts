enum typeAlignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

class HeaderPage {
  private title: string;
  private color: string;
  private font: string;
  private alignment: typeAlignment;

  constructor(
    title: string,
    color: string,
    font: string,
    alignment: typeAlignment
  ) {
    this.title = title;
    this.color = color;
    this.font = font;
    this.alignment = alignment;
  }

  public getTCF = (): string[] => {
    return [this.title, this.color, this.font];
  };

  public setAlignment = (alignment: typeAlignment): void => {
    this.alignment = alignment;
  };

  public showAllProperties = (): void => {
    console.log(`Title: ${this.title}`);
    console.log(`Color: ${this.color}`);
    console.log(`Font: ${this.font}`);
    console.log(`Alignment: ${this.alignment}`);
  };
}

const header = new HeaderPage(
  "Welcome to my website",
  "#2f2f2f",
  "Popins",
  typeAlignment.LEFT
);

console.log(header.getTCF());
header.setAlignment(typeAlignment.CENTER);
header.showAllProperties();
