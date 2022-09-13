import { Manufacturer } from './manufacturer';
export class RocketConfiguration {
    id: string;
    name: string;
    description: string;
    launch_mass: number;
    launch_cost: number;
    length: number;
    maiden_flight: Date;
    manufacturer: Manufacturer;
}