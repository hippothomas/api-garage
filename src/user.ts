import { Vehicules } from "./vehicules/vehicules.entity";

export class User {
    readonly id: number;
    readonly firstname: string;
    readonly lastname: string;
    readonly vehicules: Vehicules[];
}
