export interface Socials {
    github?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
}

export interface Team {
    id: string;
    name: string;
    year: number;
}

export interface Member {
    id: string;
    name: string;
    type: string; // e.g., "Regular", "Faculty Advisor"
    title?: string;
    department?: string;
    email: string;
    photo: string;
    year: number; // Student year or related year
    member_year: number;
    teamId: string;
    socials?: Socials;
    semester?: string;
}

export interface TeamData {
    teams: Team[];
    members: Member[];
}
