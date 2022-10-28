import {Entity, PrimaryGeneratedColumn,Column} from "typeorm"

@Entity()

export class Students {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    grade: string
   


}