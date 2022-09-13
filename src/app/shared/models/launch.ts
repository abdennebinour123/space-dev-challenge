import { LaunchServiceProvider } from './launchServiceProvider';
import { Mission } from './mission';
import { MissionPatch } from './missionPatch';
import { Pad } from './pad';
import { Program } from './program';
import { Rocket } from "./rocket";
import { Status } from "./status";

export class Launch {
    id: string;
    name: string;
    failed_landings: number;
    status: Status;
    rocket: Rocket;
    pad: Pad;
    launch_service_provider: LaunchServiceProvider;
    mission: Mission;
    mission_patches: MissionPatch[];
    program: Program[];
}