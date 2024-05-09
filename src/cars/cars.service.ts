import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corola'
        }, {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        }, {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll() {
        return this.cars
    }

    findById( id: string ) {
        const car =  this.cars.find( car => car.id === id );

        if ( !car ) throw new NotFoundException(`Car with id ${id} not found.`);

        return car;
    }

    create( createCarDto: CreateCarDto ) {
        
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push( car )
        return car 
    }

    update(id: string, updateCarDto: UpdateCarDto) {

        let carDb = this.findById( id );

        if( updateCarDto.id && updateCarDto.id !== id )
            throw new BadRequestException( `Car id is not valid inside body` )

        this.cars = this.cars.map(
            car => {
                if( car.id === id ) {
                    carDb = {
                        ...carDb,
                        ...updateCarDto,
                        id
                    }

                    return carDb;
                }
            }
        );
    }

    delete( id: string ) {
        const carDb = this.findById( id );
        this.cars = this.cars.filter( car => car.id !== id )
    }
}
