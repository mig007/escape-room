import { NumberFormatStyle } from "@angular/common";

export interface Registration {
    email:string;
    numPlayers?:number;
    teamName:string;
    teamType?:number|null;
}
