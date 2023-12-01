import { Pet } from './pet'

export interface Tutor {
    id: number;
    name: string;
    nickName: string;
    birthDate: string;
    pets: Pet[];
}