import { Pet } from './pet'

export interface Tutor {
    id: number;
    name: string;
    nickname: string;
    birthdate: string;
    pets: Pet[];
}