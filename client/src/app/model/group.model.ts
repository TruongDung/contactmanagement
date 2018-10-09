import { Contact } from "./contact.model";

export class Group {
    constructor(public id: string = '', public name: string = '', public description: string = '', public contacts: Array<Contact> = [] ) { }
}