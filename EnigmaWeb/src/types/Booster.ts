// types/Booster.ts
export interface Image {
    id: number;
    url: string;
  }
  
  export interface Card {
    id: number;
    name: string;
    images: Image[];
  }
  
  export interface Booster {
    cards: Card[];
  }
  