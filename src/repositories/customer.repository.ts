import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  /**
   * Retrieves all customers from the database.
   * @returns {Promise<Customer[]>} A promise that resolves to an array of customers.
   */
  findAll = async (): Promise<Customer[]> => {
    return this.repository.find();
  };

  /**
   * Finds a customer by the associated user ID and includes the user entity.
   * @param {string} userId - The ID of the user associated with the customer.
   * @returns {Promise<Customer | null>} A promise that resolves to the customer or null if not found.
   */
  find = async (userId: string): Promise<Customer | null> => {
    return this.repository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  };

  /**
   * Creates a new customer in the database.
   * @param {Partial<Customer>} customer - The customer data to create.
   * @returns {Promise<Customer>} A promise that resolves to the created customer.
   */
  create = async (customer: Partial<Customer>): Promise<Customer> => {
    const newCustomer = this.repository.create(customer);
    return this.repository.save(newCustomer);
  };

  /**
   * Updates an existing customer in the database.
   * @param {string} id - The ID of the customer to update.
   * @param {Partial<Customer>} customer - The updated customer data.
   * @returns {Promise<void>} A promise that resolves when the update is complete.
   */
  update = async (id: string, customer: Partial<Customer>): Promise<void> => {
    await this.repository.update(id, customer);
  };

  /**
   * Deletes a customer from the database.
   * @param {string} id - The ID of the customer to delete.
   * @returns {Promise<void>} A promise that resolves when the customer is deleted.
   */
  delete = async (id: string): Promise<void> => {
    await this.repository.delete(id);
  };
}
