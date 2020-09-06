import { Users } from "./users/users.entity";

export class Vehicule {
    readonly id: number;
    readonly marque: string;
    readonly modeleNum: string;
    readonly users: Users[];
}
