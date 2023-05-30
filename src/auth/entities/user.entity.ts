
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class User {

    @ApiProperty({
        example: '94b86e5f-ffde-4e2c-a40c-f797dbcbbfaa',
        description: 'User Id',
        uniqueItems: true,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @ApiProperty({
        example: 'test@test.com',
        description: 'User Email',
        uniqueItems: true,
    })
    @Column('text', {
        unique: true
    })
    email: string;


    @ApiProperty({
        example: 'Test321',
        description: 'User password',
    })
    @Column('text',{
        select: false
    })
    password: string;

    @ApiProperty({
        example: 'Jose Rodriguez',
        description: 'Full name of the user',

    })
    @Column('text')
    fullName: string;


    @ApiProperty({
        example: 15,
        description: 'Score of the user',
        default: 0
    })
    @Column('numeric' ,{
        default: 0,
        nullable: true,
    })
    score: number;

    @BeforeInsert()
    checkFieldBeforeInsert() {
        this.email = this.email.toLowerCase().trim()
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate() {
        this.checkFieldBeforeInsert()
    }
}