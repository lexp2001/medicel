export interface ParticipantInterface {
    _id?: string
    birthday: string
    password?: string
    email: string
    comunity:  string
    name: string
    phone: string
    rut: string
    street: string,
    questions: [string, string]
}