export enum EText {
    SUMMARY =  "As a Web Application Developer with over two years of full stack experience at Raksa Solution Co. Ltd " +
    ", I have successfully worked on the development of POS system and other related projects." +
    "Beyond my technical proficiency, I offer high responsibility, honesty, hard working and effective communication. " + 
    "I intend to apply my skills to enhance your existing development workflows, resolve current difficulties, and become a valuable member of your team while fostering my own professional development."
}

export interface IMenu {
    id: number;
    label: string;
    route: string;
    selected: boolean;
}