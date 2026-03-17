export abstract class MembersRepository {

    abstract create(
        data:{ name: string, role: string}
    ): Promise<{name: string, function: string}>;

    abstract findAllMember(): Promise<{
        id: string
        name: string
        function: string
    }[]>;
    abstract findOneMember(id: string): Promise<{
        id: string
        name: string
        function: string
    }>
    abstract updateMember(id: string, data:{ name: string, role: string}): Promise<{id: string, name: string, function: string}>

    abstract deleteMember(id: string): Promise<void>
}
