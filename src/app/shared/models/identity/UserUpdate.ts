import { logging } from "protractor";
import { Funcao } from "../Funcao";
import { Titulo } from "../Titulo";

export interface UserUpdate {
    id: any;
    titulo: Titulo;
    userName: string;
    primeiroNome: string;
    ultimoNome: string;
    email: string;
    phoneNumber: string;
    funcao: Funcao;
    descricao: string;
    password: string;
    token: string;
    imagemURL: string;
  }
