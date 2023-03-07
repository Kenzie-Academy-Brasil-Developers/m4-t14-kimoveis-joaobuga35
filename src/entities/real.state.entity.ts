/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm"; 
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedule.user.properties.entity";

@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "boolean", default: false})
    sold: boolean;

    @Column({type: "decimal", precision: 12, scale: 2})
    value: number | string;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;
    
    @ManyToOne(() => Category, category => category.estate)
    category: Category;

    @OneToMany(() => Schedule, schedule => schedule.realEstate)
    schedule: Schedule[]; 
}

export {
    RealEstate
};