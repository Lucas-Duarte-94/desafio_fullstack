import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('playlist')
class Playlist {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Playlist };