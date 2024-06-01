export interface Game {
  _id: string;
  nom: string;
  description: string;
  prix: number;
  quantiteStock: number;
  codeActivation: string;
  coverURL: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}


export interface User {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  isAdmin: boolean;
  balance: number;
  password: string;
  createdAt: string | Date;
  updatedAt: string| Date;
}

export interface Buy {
  _id: string;
  user: User;
  game: Game;
  bought_price: number;
  createdAt: string | Date;
  updatedAt: string| Date;
}