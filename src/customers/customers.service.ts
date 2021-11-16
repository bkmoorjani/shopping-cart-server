import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  CustomerModel: any;
  constructor(@InjectModel(Customer.name) private orderModel: Model<CustomerDocument>) {}
  create(createOrderDto: CreateCustomerDto) {
    return 'This action adds a new order';
  }

  async findAll(): Promise<Customer[]> {
    return this.CustomerModel.find().exec();
  }



  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
